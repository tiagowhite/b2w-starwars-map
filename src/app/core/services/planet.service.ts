import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetUrl = `${environment.apiUrl}planet.json`;

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<IPlanets>
}
