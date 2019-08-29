import {Planet} from '../../../planets/planet';

export interface PlanetState {
  planets: Array<Planet>;
  selectedPlanet: Planet;
  isLoading: boolean;
}

export const initialPlanetState: PlanetState = {
  planets: null,
  selectedPlanet: null,
  isLoading: false
};
