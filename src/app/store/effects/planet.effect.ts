import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import {
  GetPlanet,
  GetPlanetError, GetPlanetImages, GetPlanetImagesSuccess,
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
import { PlanetImages } from '../../models/planetImages';

@Injectable()
export class PlanetEffect {
  @Effect()
  getPlanet = this.actions.pipe(
    ofType<GetPlanet>(PlanetActionsEnum.GetPlanet),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectPlanetList))),
    switchMap(([url, planets]) => {
      const selectedPlanet = planets.filter(planet => planet.url === url)[0];
      return this.planetService.getPlanet<Planet>(selectedPlanet.url).pipe(
        switchMap((planet: Planet) => of(new GetPlanetSuccess(planet)))
      );
    }),
    catchError((err: string) => of(new GetPlanetError(err)))
  );


  @Effect()
  getPlanets = this.actions.pipe(
    ofType<GetPlanets>(PlanetActionsEnum.GetPlanets),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectPlanetList))),
    switchMap(([{page}]) => this.planetService.getPlanets<PlanetsHttp>(page)),
    switchMap((planets: PlanetsHttp) => of(new GetPlanetsSuccess(planets.results))),
    catchError((err: string) => of(new GetPlanetsError(err)))
  );


  @Effect()
  getPlanetsImages = this.actions.pipe(
    ofType<GetPlanetImages>(PlanetActionsEnum.GetPlanetImages),
    switchMap(() => this.planetService.getPlanetImage<Array<PlanetImages>>()),
    switchMap((planetImages: Array<PlanetImages>) => of(new GetPlanetImagesSuccess(planetImages))),
    catchError((err: string) => of(new GetPlanetsError(err)))
  );


  constructor(
    private planetService: PlanetService,
    private actions: Actions,
    private store: Store<AppState>
  ) {
  }


}
