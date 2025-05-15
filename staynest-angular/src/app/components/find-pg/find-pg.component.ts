import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-find-pg',
  templateUrl: './find-pg.component.html',
  styleUrls: ['./find-pg.component.css'],
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
})
export class FindPgComponent implements OnInit {
  allPGs: any[] = [];
  filteredPGs: any[] = [];
  selectedPrice: string = '';
  selectedSharing: string = '';
  selectedAmenities: string[] = [];
  searchQuery: string = '';

  suggestions: string[] = [];
  highlightedIndex: number = -1;

  constructor(private pgService: PgService) {}

  ngOnInit(): void {
    this.pgService.getPGs().subscribe((data: any[]) => {
      this.allPGs = data;
      this.filteredPGs = [...this.allPGs];
    });
  }

  applyFilters(): void {
    const query = this.searchQuery.toLowerCase();

    this.suggestions = this.allPGs
      .map(pg => [pg.name, pg.location])
      .flat()
      .filter(item => item.toLowerCase().includes(query))
      .filter((value, index, self) => self.indexOf(value) === index)
      .slice(0, 5);

    this.filteredPGs = this.allPGs.filter((pg) => {
      const matchesSearch =
        pg.name.toLowerCase().includes(query) ||
        pg.location.toLowerCase().includes(query);

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

    this.highlightedIndex = -1;
  }

  toggleAmenity(amenity: string): void {
    if (this.selectedAmenities.includes(amenity)) {
      this.selectedAmenities = this.selectedAmenities.filter((a) => a !== amenity);
    } else {
      this.selectedAmenities.push(amenity);
    }
    this.applyFilters();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.suggestions.length === 0) return;

    if (event.key === 'ArrowDown') {
      this.highlightedIndex = (this.highlightedIndex + 1) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.highlightedIndex = (this.highlightedIndex - 1 + this.suggestions.length) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'Enter') {
      if (this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
        this.selectSuggestion(this.suggestions[this.highlightedIndex]);
        event.preventDefault();
      }
    }
  }

  selectSuggestion(suggestion: string): void {
    this.searchQuery = suggestion;
    this.suggestions = [];
    this.applyFilters();
  }
}
