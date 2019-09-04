import { Injectable } from '@angular/core';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  GetPlanet,
  GetPlanetError,
  GetPlanets,
  GetPlanetsError,
  GetPlanetsSuccess,
  GetPlanetSuccess,
  PlanetActionsEnum
} from '../actions/planet.actions';
import { AppState } from '../state/app.state';
import { PlanetService } from '../../services/planet.service';
import { selectPlanetList } from '../selectors/planet.selector';
import { PlanetsHttp } from '../../models/planets-http';
import { Planet } from '../../models/planet';
import { log } from 'util';

@Injectable()
export class PlanetEffect {
  @Effect()
  getPlanet = this.actions.pipe(
    ofType<GetPlanet>(PlanetActionsEnum.GetPlanet),
    map((action) => action.payload),
    withLatestFrom(this.store.pipe(select(selectPlanetList))),
    switchMap( ([name, planets]) => {
      debugger;
      const selectedPlanet =  planets.filter(planet => planet.url === name)[0];
      return of(new GetPlanetSuccess(selectedPlanet));
    }), 

  );
  /*
 @Effect()
  getPlanet = this.actions.pipe(
    ofType<GetPlanet>(PlanetActionsEnum.GetPlanet),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectPlanetList))),
    switchMap(([url, planets]) => {
      const selectedPlanet = planets.filter(planet => planet.url === url)[0];
      return of(new GetPlanetSuccess(selectedPlanet));
    })
  );
   */

  @Effect()
  getPlanets = this.actions.pipe(
    ofType<GetPlanets>(PlanetActionsEnum.GetPlanets),
    switchMap(() => this.planetService.getPlanets<PlanetsHttp>()),
    switchMap((planets: PlanetsHttp) => of(new GetPlanetsSuccess(planets.results))),
    catchError((err: string) => of(new GetPlanetsError(err)))
  );


  constructor(
    private planetService: PlanetService,
    private actions: Actions,
    private store: Store<AppState>
  ) {
  }


}
