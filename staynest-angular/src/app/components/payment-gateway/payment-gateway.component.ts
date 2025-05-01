import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-gateway',
  imports: [],
  templateUrl: './payment-gateway.component.html',
  styleUrl: './payment-gateway.component.css'
})
export class PaymentGatewayComponent {
  constructor(private router: Router) {}

  completePayment() {
    alert('Payment successful! Redirecting to the homepage...');
    this.router.navigate(['/booking-confirmation']);
  }
}
