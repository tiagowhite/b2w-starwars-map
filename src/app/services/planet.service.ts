import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { log } from 'util';


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

  public getPlanetImage<T>(name: string): Observable<T> | any {
    return this.http.get<T>(name)
      .pipe(
        map((res: any) => {
          debugger;
          const filter = [...new Set(res.map(x => x.terrain))];
          const split = [].concat(...filter.map(
            value => value.toString().replace(/\s+/g, '').split(',')
          ));
          const unique = [...new Set(split)];
          log(unique);
        }),
        catchError((error: any) => throwError(error))
      );
  }


}

