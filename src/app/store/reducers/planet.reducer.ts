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
    case PlanetActionsEnum.GetPlanetsSuccess: {
      return {
        ...state,
        isLoading: false,
        planets: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanetsImage: {
      return {
        ...state
      };
    }
    case PlanetActionsEnum.GetPlanetsImageSuccess: {
      return {
        ...state,
        planets_images: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanetsError: {
      return {
        ...state,
        error: true,
        errorMessage: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanet: {
      return {
        ...state,
        isLoading: true
      };
    }
    case PlanetActionsEnum.GetPlanetSuccess: {
      return {
        ...state,
        isLoading: false,
        selectedPlanet: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanetError: {
      return {
        ...state,
        error: true,
        errorMessage: action.payload
      };
    }
    default:
      return state;
  }
};
