import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { PlanetState } from '../state/planet.state';

const selectPlanets = (state: AppState) => state.planets;
const selectPlanetImages = (state: AppState) => state.planets.planetImages;

export const isPlanetsListLoading = createSelector(
  selectPlanets,
  state => state.isLoading
);

export const selectPlanetList = createSelector(
  selectPlanets,
  selectPlanetImages,
  (state: PlanetState) => state.planets
);

export const selectSelectedPlanet = createSelector(
  selectPlanets,
  (state: PlanetState) => state.selectedPlanet
);

