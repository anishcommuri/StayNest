import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../payment.service'; // Adjust path if needed

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent {

  constructor(private router: Router, private paymentService: PaymentService) {}

  completePayment() {
    const dummyUser = {
      name: 'Anish',
      email: 'anish@example.com',
      contact: '9876543210'
    };

    const amount = 500; // ₹5.00 in INR

    this.paymentService.pay(amount, dummyUser.name, dummyUser.email, dummyUser.contact)
      .then(() => {
        this.router.navigate(['/booking-confirmation']);
      });
  }
}
