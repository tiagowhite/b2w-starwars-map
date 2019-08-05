import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {PlanetState} from '../state/planet.state';

const selectPlanets = (state: AppState) => state.planets;

export const selectPlanetList = createSelector(
  selectPlanets,
  (state: PlanetState) => state.planets
);
