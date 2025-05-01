import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-confirmation',
  imports: [],
  templateUrl: './booking-confirmation.component.html',
  styleUrl: './booking-confirmation.component.css'
})
export class BookingConfirmationComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']); // Navigates to the HomeComponent
  }
}
