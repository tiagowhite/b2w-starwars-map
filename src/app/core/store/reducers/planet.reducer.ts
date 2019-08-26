import { initialPlanetState, PlanetState } from '../state/planet.state';
import { PlanetActions, PlanetActionsEnum } from '../actions/planet.actions';

export const planetReducer = (
  state = initialPlanetState,
  action: PlanetActions
): PlanetState => {
  switch (action.type) {
    case PlanetActionsEnum.GetPlanetsSuccess: {
      return {
        ...state,
        planets: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanetSuccess: {
      return {
        ...state,
        selectedPlanet: action.payload
      };
    }
    default:
      return state;
  }
};
