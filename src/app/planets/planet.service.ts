import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { log } from 'util';

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

  public async asyncTest<T>(): Promise<T | any> {
    const range = Array.from(Array(8).keys());
    for (const page of range) {
      if (page > 0) {
        await this.http.get<T>(`${this.testUrl}${page}`).toPromise()
          .then((res: any) => {
            const data = res.results;
            const filter = Array.from(new Set(data.map(planet => planet.terrain)))
              .map(terrain => {
                return {
                  name: data.find(name => name.terrain === terrain).name,
                  terrain
                };
              });
            log(filter);
            // return data.map((obj, index) => ({...obj, id: index + page}));
          }).catch(
            catchError((error: any) => throwError(error))
          );
      }
    }
  }
}

