import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { InvoiceDetailService } from '../../services/invoice-detail.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  constructor(private http: HttpClient,
              private invoiceDetail: InvoiceDetailService
  ) {}

  httpHeaders: HttpHeaders = new HttpHeaders({Autorization: 'Basic MTExODI1MjI6NjAtZGF5ZnJlZXRyaWFs'})

  code: number = 200
  result: any

  ngOnInit() {
    this.http.get('https://localhost:7158/api/v1/Invoicer/GetProductListByInvoiceId/' + this.invoiceDetail.invoiceId, { headers: this.httpHeaders })
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      this.code = error.status
      return of();
    }))
    .subscribe(response => {      
      this.code = response.code
      this.result = response.details
    })
  }

}
