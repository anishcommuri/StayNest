import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css'
})
export class BookNowComponent {

  constructor(private paymentService: PaymentService, private http: HttpClient) { }

  initiatePayment() {
    // Call your backend to create order
    this.http.post<any>('http://localhost:3000/create-order', { amount: 50000 })
      .subscribe(order => {
        this.paymentService.pay(
          order.amount / 100,
          'Your Name',
          'youremail@example.com',
          '9876543210'
        );
      }, error => {
        console.error('Order creation failed', error);
      });
  }
}
