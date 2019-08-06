import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetUrl = `${environment.swapi}planets`;

  constructor(private http: HttpClient) { }

  public getPlanets<T>(): Observable<T> {
    return this.http.get<T>(this.planetUrl);
  }
}
