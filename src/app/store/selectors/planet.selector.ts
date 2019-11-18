import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { PlanetState } from '../state/planet.state';

const selectPlanets = (state: AppState) => state.planets;

export const isPlanetsListLoading = createSelector(
  selectPlanets,
  state => state.isLoading
);

export const selectPlanetList = createSelector(
  selectPlanets,
  (state: PlanetState) => state.planets
);

export const selectPlanetImageList = createSelector(
  selectPlanets,
  (state: PlanetState) => state.planetImages
);

export const selectSelectedPlanet = createSelector(
  selectPlanets,
  (state: PlanetState) => state.selectedPlanet
);

