import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetUrl = `${environment.swapi}planets`;
  testUrl = 'https://swapi.co/api/planets/?format=json&page=';

  constructor(private http: HttpClient) {
  }

  public getPlanets<T>(): Observable<T> {
    return this.http.get<T>(this.planetUrl);
  }

  public test<T>(page?: number | 1): Observable<T> {
    return this.http.get<T>(`${this.testUrl}${page}`);
  }

}
