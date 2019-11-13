import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


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

  public getPlanetImage<T>(): Observable<T> {
    return this.http.get<T>(this.images);
  }

  public getTest<P, I>(): any {
    const planets = this.getPlanets<P>();
    const images = this.getPlanetImage<I>();
    return forkJoin([planets, images]).pipe(
      map(([planets$, images$]) => {
        planets$[0].results.filter(name => name === images$.images.name);
      })
    );

  }

}

