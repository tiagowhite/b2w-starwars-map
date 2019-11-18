import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetUrl = `${environment.swapi}planets/?page=`;
  images = `${environment.mockApi}images.json`;

  constructor(private http: HttpClient) {
  }

  public getPlanets<T>(page: number, limit: number): Observable<T> {
    return this.http.get<T>( `${this.planetUrl}${page}`);
  }

  public getPlanet<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public getPlanetImage<T>(): Observable<T> {
    return this.http.get<T>(this.images);
  }

}

