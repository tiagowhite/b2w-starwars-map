import { UiActions, UiActionsEnum } from '../actions/ui.actions';
import { UiState, uiState } from '../state/ui.state';

export const uiReducer = (
  state = uiState,
  action: UiActions
): UiState => {
  switch (action.type) {
    case UiActionsEnum.START_LOADING: {
      return {
        isLoading: true
      };
    }
    case UiActionsEnum.STOP_LOADING: {
      return {
        isLoading: false
      };
    }
    default:
      return state;
  }
};
