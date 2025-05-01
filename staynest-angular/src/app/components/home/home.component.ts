import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Find Your Perfect Stay with StayNest';
  description: string = 'The smartest way to discover PG accommodations in your city – quick, verified, and stress-free.';

  constructor(private router: Router) {}

  navigateToFindPg(): void {
    this.router.navigate(['/find-pg']);
  }
}