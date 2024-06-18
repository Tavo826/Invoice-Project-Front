import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  constructor() { }

  invoice_id: number = 0

  get invoiceId() {
    return this.invoice_id
  }
}
