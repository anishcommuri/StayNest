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

async completePayment() {
  const amount = 5000; // Amount in INR
  const name = 'Test User'; // Replace with actual user name
  const email = 'test@example.com'; // Replace with actual user email
  const contact = '9876543210'; // Replace with actual contact number

  await this.paymentService.pay(amount, name, email, contact);

    this.paymentService.pay(amount, name, email, contact)
      .then(() => {
        this.router.navigate(['/booking-confirmation']);
      });
  }
}
