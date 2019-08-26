import { ConfigState, initialConfigState } from '../state/config.state';
import { ConfigActions, ConfigActionsEnum } from '../actions/config.actions';

export const configReducer = (
  state = initialConfigState, action: ConfigActions): ConfigState => {
  switch (action.type) {
    case ConfigActionsEnum.GetConfigSuccess: {
      return {
        ...state,
        config: action.payload
      };
    }
    default:
      return state;
  }
};
