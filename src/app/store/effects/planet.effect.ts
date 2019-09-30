import { Injectable } from '@angular/core';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';

import { forkJoin, Observable, of } from 'rxjs';
import { AppState } from '../state/app.state';
import { PlanetService } from '../../services/planet.service';
import { selectPlanetList } from '../selectors/planet.selector';
import { PlanetsHttp } from '../../models/planets-http';
import { Planet } from '../../models/planet';
import * as b2wActions from '../actions/planet.actions';
import { log } from 'util';

@Injectable()
export class PlanetEffect {
  @Effect()
  getPlanet = this.action$.pipe(
    ofType<b2wActions.GetPlanet>(b2wActions.PlanetActionsEnum.GetPlanet),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectPlanetList))),
    switchMap(([url, planets]) => {
      const selectedPlanet = planets.filter(planet => planet.url === url)[0];
      return this.planetService.getPlanet<Planet>(selectedPlanet.url).pipe(
        switchMap((planet: Planet) => of(new b2wActions.GetPlanetSuccess(planet)))
      );
    }),
    catchError((err: string) => of(new b2wActions.GetPlanetError(err)))
  );

  @Effect()
  getPlanets = this.action$.pipe(
    ofType<b2wActions.GetPlanets>(b2wActions.PlanetActionsEnum.GetPlanets),
    switchMap(() => this.planetService.getPlanets<PlanetsHttp>()),
    switchMap((planets: PlanetsHttp) => of(new b2wActions.GetPlanetsSuccess(planets.results))),
    switchMap((data: any) => {
      const [planets, images] = data;
      return forkJoin([
        of(planets),
        of(images),
        this.planetService.getPlanetImage().pipe(
          map((data$: any) => (console.log(data$)))
        )
      ]);
    }),

    catchError((err: string) => of(new b2wActions.GetPlanetsError(err)))
  );


  constructor(
    private planetService: PlanetService,
    private action$: Actions,
    private store: Store<AppState>
  ) {
  }


}
