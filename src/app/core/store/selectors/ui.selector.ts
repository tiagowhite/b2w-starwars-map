import { AppState } from '../state/app.state';
import { UiState } from '../state/ui.state';
import { createSelector } from '@ngrx/store';

const uiState = (state: AppState) => state.ui;

export const getUiState = createSelector(
  uiState,
  (state: UiState) => state.isLoading
);
