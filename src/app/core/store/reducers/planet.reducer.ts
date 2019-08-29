import { initialPlanetState, PlanetState } from '../state/planet.state';
import { PlanetActions, PlanetActionsEnum } from '../actions/planet.actions';

export const planetReducer = (
  state = initialPlanetState,
  action: PlanetActions
): PlanetState => {
  switch (action.type) {
    case PlanetActionsEnum.GetPlanets: {
      return {
        ...state,
        isLoading: true
      };
    }
    case PlanetActionsEnum.GetPlanet: {
      return {
        ...state,
        isLoading: true
      };
    }
    case PlanetActionsEnum.GetPlanetsSuccess: {
      return {
        ...state,
        isLoading: false,
        planets: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanetSuccess: {
      return {
        ...state,
        isLoading: false,
        selectedPlanet: action.payload
      };
    }
    default:
      return state;
  }
};
