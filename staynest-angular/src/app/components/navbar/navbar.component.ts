import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      // Navigate to home first
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => {
          this.scroll(sectionId);
        }, 100); // delay to allow DOM to render
      });
    } else {
      this.scroll(sectionId);
    }
  }

  private scroll(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToFindPg() {
    this.router.navigate(['/find-pg']);
  }
}
