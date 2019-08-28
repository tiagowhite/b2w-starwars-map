import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetUrl = `${environment.swapi}planets`;

  constructor(private http: HttpClient) {}

  public getPlanets<T>(): Observable<T> {
    return this.http.get<T>(this.planetUrl);
  }
}

