import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  getRandomSeed(): Observable<Config> {
    return new Observable<Config>(seed => {
      const random = from([Math.floor(Math.random() * 61) + 1]);
      return random.subscribe({
        next(value) {
          seed.next({randomSeed: value} as Config);
        },
      });
    });
  }
}
