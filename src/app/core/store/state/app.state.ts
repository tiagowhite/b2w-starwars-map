import { RouterReducerState } from '@ngrx/router-store';
import { ConfigState, initialConfigState } from './config.state';
import { initialPlanetState, PlanetState } from './planet.state';

export interface AppState {
  router?: RouterReducerState;
  planets: PlanetState;
  config: ConfigState;
}

export const initialAppState: AppState = {
  planets: initialPlanetState,
  config: initialConfigState,

};

export function getInitialState(): AppState {
  return initialAppState;
}
