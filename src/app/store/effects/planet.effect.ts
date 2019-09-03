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
    switchMap((action => action.payload)),
    /*switchMap((action) => this.planetService.getPlanet<Planet>(action)),
    switchMap((planet: Planet) => of(new GetPlanetSuccess(planet))),
    catchError((err: string) => of(new GetPlanetError(err)))*/
  );


  @Effect()
  getPlanets = this.actions.pipe(
    ofType<GetPlanets>(PlanetActionsEnum.GetPlanets),
    switchMap(() => this.planetService.getPlanets<PlanetsHttp>()),
    switchMap((planetList: PlanetsHttp) => of(new GetPlanetsSuccess(planetList.results))),
    catchError((err: string) => of(new GetPlanetsError(err)))
  );


  constructor(
    private planetService: PlanetService,
    private actions: Actions,
    private store: Store<AppState>
  ) {
  }


}
