import {Planet} from '../../models/planet';

export interface PlanetState {
  planets: Array<Planet>;
  planets_images: Array<string>;
  selectedPlanet: Planet;
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
}

export const initialPlanetState: PlanetState = {
  planets: null,
  planets_images: null,
  selectedPlanet: null,
  isLoading: false,
  error: false,
  errorMessage: null
};
