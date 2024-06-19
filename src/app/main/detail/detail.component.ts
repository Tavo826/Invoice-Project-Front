import { HttpClient } from '@angular/common/http';
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

  code: number = 200
  result: any

  ngOnInit() {
    this.http.get('http://igorditto-001-site1.ctempurl.com/api/v1/Invoicer/GetProductListByInvoiceId/' + this.invoiceDetail.invoiceId)
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
