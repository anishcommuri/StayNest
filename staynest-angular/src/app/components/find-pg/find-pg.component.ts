import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PgService } from '../../services/pg.service'; // Import the service

@Component({
  selector: 'app-find-pg',
  templateUrl: './find-pg.component.html',
  styleUrls: ['./find-pg.component.css'],
  imports: [RouterModule, FormsModule, CommonModule],
})
export class FindPgComponent implements OnInit {
  allPGs: any[] = [];
  filteredPGs: any[] = [];
  selectedPrice: string = '';
  selectedSharing: string = '';
  selectedAmenities: string[] = [];
  searchQuery: string = '';

  constructor(private pgService: PgService) {} // Inject the PgService

  ngOnInit(): void {
    // Fetch PG data using the service
    this.pgService.getPGs().subscribe(
      (data: any[]) => {
        this.allPGs = data;
        this.filteredPGs = [...this.allPGs]; // Initialize with all PGs
      },
    );
  }

  applyFilters(): void {
    this.filteredPGs = this.allPGs.filter((pg) => {
      const matchesSearch =
        pg.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        pg.location.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesPrice =
        !this.selectedPrice || pg.price <= parseInt(this.selectedPrice);

      const matchesSharing =
        !this.selectedSharing || pg.sharingType.toLowerCase() === this.selectedSharing.toLowerCase();

      const matchesAmenities =
        this.selectedAmenities.length === 0 ||
        this.selectedAmenities.every((amenity) =>
          pg.amenities.map((a: string) => a.toLowerCase()).includes(amenity.toLowerCase())
        );

      return matchesSearch && matchesPrice && matchesSharing && matchesAmenities;
    });
  }

  toggleAmenity(amenity: string): void {
    if (this.selectedAmenities.includes(amenity)) {
      this.selectedAmenities = this.selectedAmenities.filter((a) => a !== amenity);
    } else {
      this.selectedAmenities.push(amenity);
    }
    this.applyFilters();
  }
}