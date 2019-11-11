import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetUrl = `${environment.swapi}planets`;
  images = `${environment.mockApi}images.json`;

  constructor(private http: HttpClient) {
  }

  public getPlanets<T>(): Observable<T> {
    return this.http.get<T>(this.planetUrl);
  }

  public getPlanet<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public getPlanetImage<T>(): Observable<T | any> {
    return forkJoin({
      planets: of(this.http.get<T>(this.planetUrl)),
      images: of(this.http.get<any>(this.images)),
    });
  }


}

