import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { planetReducer } from './planet.reducer';
import { configReducer } from './config.reducer';
import { uiReducer } from './ui.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  planets: planetReducer,
  config: configReducer,
  ui: uiReducer
};
