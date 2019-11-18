import { initialPlanetState, PlanetState } from '../state/planet.state';
import { PlanetActions, PlanetActionsEnum } from '../actions/planet.actions';
import { selectPlanetImageList } from '../selectors/planet.selector';

export const planetReducer = (
  state = initialPlanetState,
  action: PlanetActions
): PlanetState => {
  switch (action.type) {
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
    case PlanetActionsEnum.GetPlanetsError: {
      return {
        ...state,
        error: true,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanetImages: {
      return {
        ...state,
        isLoading: true
      };
    }
    case PlanetActionsEnum.GetPlanetImagesSuccess: {
      return {
        ...state,
        isLoading: false,
        planetImages: action.payload
      };
    }
    case PlanetActionsEnum.GetPlanetImagesError: {
      return {
        ...state,
        error: true,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case PlanetActionsEnum.SetPlanetImages: {
      return {
        ...state,
        isLoading: false,
        planets: state.planets

      };
    }


    default:
      return state;
  }
};
