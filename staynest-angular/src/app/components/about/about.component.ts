import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports:[CommonModule]
})
export class AboutComponent {
  whoWeAreTitle = 'Who We Are ?';
  whoWeAreDescription = `At Staynest, we are redefining student and professional living. Our platform connects you with verified PGs and hostels, offering transparent pricing, real 3D room views, and certified food and amenities standards. We make finding your next home simple, safe, and reliable — so you can focus on what truly matters.`;
  whoWeAreDescription2 = `Staynest: Stay Better, Live Smarter.`
  missionvissionTitle = 'Our Mission & Vision';
  missionvissionDescription = `Making students fill at home again.`;
  visionTitle = 'Vision';
  visionDescription = `To be India’s most loved PG discovery and booking platform – where affordability, safety, and comfort come together effortlessly.`;

  missionTitle = 'Mission';
  missionPoints = [
    'Provide verified and safe accommodations,Enable easy online booking and payments,Empower PG owners and users alike'
  ];

  testimonialsTitle = 'What People Say';
  testimonials = [
    { text: 'I had just moved to Bangalore for my first job and StayNest helped me find the perfect PG within 2 days! Safe and super clean.', author: 'Aditi Verma, Software Engineer' },
    { text: 'As a PG owner, StayNest gave me more visibility and direct bookings than any broker ever could. The onboarding was seamless!', author: 'Manish Patel, PG Owner, Ahmedabad' },
    { text: 'The filters and amenities section saved me so much time. I knew exactly what I was getting before I moved in.', author: 'Tanvi Joshi, MBA Student' },
    { text: 'I was worried about relocating to a new city but StayNest made it feel like a breeze. Thank you!', author: 'Rahul Bhandari, Intern, Hyderabad' }
  ];

  teamTitle = 'Meet the Team';
  team = [
    
    { name: 'Rohan', role: 'CEO', image: 'assets/images/Rohan.jpg' },
    { name: 'Hemanth', role: 'COO', image: 'assets/images/Hemanth.png' },
    { name: 'Anish', role: 'CMO', image: 'assets/images/Anish.jpg' },
    { name: 'Preeti', role: 'CTO', image: 'assets/images/Preeti.jpg' },
    { name: 'Suraj', role: 'CFO', image: 'assets/images/Suraj.jpg' },
    { name: 'Anusha', role: 'FRM', image: 'assets/images/Anusha.jpg' }
  ];
}