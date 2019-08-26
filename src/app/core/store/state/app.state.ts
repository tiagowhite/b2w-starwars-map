import { RouterReducerState } from '@ngrx/router-store';
import { ConfigState, initialConfigState } from './config.state';
import { initialPlanetState, PlanetState } from './planet.state';
import { uiState, UiState } from './ui.state';

export interface AppState {
  router?: RouterReducerState;
  planets: PlanetState;
  config: ConfigState;
  ui: UiState;
}

export const initialAppState: AppState = {
  planets: initialPlanetState,
  config: initialConfigState,
  ui: uiState
};

export function getInitialState(): AppState {
  return initialAppState;
}
