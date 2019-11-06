import { Planet } from '../../models/planet';
import { PlanetImages } from '../../models/planetImages';

export interface PlanetState {
  planets: Array<Planet>;
  planetImages: PlanetImages;
  selectedPlanet: Planet;
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
}

export const initialPlanetState: PlanetState = {
  planets: null,
  planetImages: null,
  selectedPlanet: null,
  isLoading: false,
  error: false,
  errorMessage: null
};
