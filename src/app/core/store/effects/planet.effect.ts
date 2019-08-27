import { Injectable } from '@angular/core';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { GetPlanet, GetPlanets, GetPlanetsSuccess, GetPlanetSuccess, PlanetActionsEnum } from '../actions/planet.actions';
import { AppState } from '../state/app.state';
import { PlanetService } from '../../../planets/planet.service';
import { selectPlanetList } from '../selectors/planet.selector';
import { Planets } from '../../../planets/planets';

@Injectable()
export class PlanetEffect {
  @Effect()
  getPlanet = this.actions.pipe(
    ofType<GetPlanet>(PlanetActionsEnum.GetPlanet),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectPlanetList))),
    switchMap(([url, planets]) => {
      const selectedPlanet = planets.filter(planet => planet.url === url + '')[0];
      return of(new GetPlanetSuccess(selectedPlanet));
    })
  );

  @Effect()
  getPlanets = this.actions.pipe(
    ofType<GetPlanets>(PlanetActionsEnum.GetPlanets),
    switchMap(() => this.planetService.getPlanets<Planets>()),
    switchMap((planetList: Planets) => of(new GetPlanetsSuccess(planetList.results))),
  );


  constructor(
    private planetService: PlanetService,
    private actions: Actions,
    private store: Store<AppState>
  ) {}


}
