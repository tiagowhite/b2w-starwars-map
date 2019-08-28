import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { from, Observable } from 'rxjs';
import { Config } from '../models/config';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url = environment.randomSeed;

  constructor(private http: HttpClient) {
  }

  getRandomSeed(): Observable<Config> {
    return this.http.get<Config>(this.url)
      .pipe(
        map(data => data)
      );
  }
}
