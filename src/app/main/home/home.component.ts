import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { InvoiceDetailService } from '../../services/invoice-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private invoiceDetail: InvoiceDetailService,
              private router: Router
  ) {}

  form_invoice = this.fb.group({
    'client': ['', Validators.required],
    'date': ['', Validators.required],
    'discount': [0],
    'subtotal': [Validators.required]
  })

  get client() {
    return this.form_invoice.get('client') as FormControl
  }

  get date() {
    return this.form_invoice.get('date') as FormControl
  }

  get discount() {
    return this.form_invoice.get('discount') as FormControl
  }

  get subtotal() {
    return this.form_invoice.get('subtotal') as FormControl
  }

  code: number = 200
  result: any

  ngOnInit() {
    this.http.get('https://localhost:7158/api/v1/Invoicer/GetInvoiceList')
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      this.code = error.status
      return of();
    }))
    .subscribe(response => {      
      this.code = response.code
      this.result = response.details
    })
  }

  procesar() {
    this.http.post<any>('https://localhost:7158/api/v1/Invoicer/Create', 
      this.form_invoice.getRawValue()
    )
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      this.code = error.status
      return of();
    }))
    .subscribe(response => {
      this.code = response.code
      if (response.response) {
        this.http.get('https://localhost:7158/api/v1/Invoicer/GetInvoiceList')
        .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
          this.code = error.status
          return of();
        }))
        .subscribe(response => {
          this.code = response.code
          this.result = response.details
        })
      }
    })    
  }

  detailRedirect(invoice: any) {
    console.log("REDIRECT: " + invoice.id);
    this.invoiceDetail.invoice_id = invoice.id
    this.router.navigateByUrl('/invoice/details')
  }

}
