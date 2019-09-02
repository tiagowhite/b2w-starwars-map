import {Planet} from '../../models/planet';

export interface PlanetState {
  planets: Array<Planet>;
  selectedPlanet: Planet;
  isLoading: boolean;
  error: boolean;
}

export const initialPlanetState: PlanetState = {
  planets: null,
  selectedPlanet: null,
  isLoading: false,
  error: false
};
