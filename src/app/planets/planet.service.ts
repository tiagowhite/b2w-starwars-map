import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { log } from 'util';
import { GetPlanetsSuccess } from '../core/store/actions/planet.actions';
import { StopLoading } from '../core/store/actions/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetUrl = `${environment.swapi}planets`;
  testUrl = `${environment.mockApi}terrain.json`;

  constructor(private http: HttpClient) {
  }

  public getPlanets<T>(): Observable<T> {
    return this.http.get<T>(this.planetUrl);
  }
}

