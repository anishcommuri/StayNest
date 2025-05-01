import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PG {
  id: number;
  name: string;
  location: string;
  price: number;
  sharingType: string;
  amenities: string[];
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class PgService {
  private dataUrl = 'assets/data/pg-data.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getPGs(): Observable<PG[]> {
    return this.http.get<PG[]>(this.dataUrl);
  }
}