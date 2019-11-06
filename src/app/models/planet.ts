import { Film } from './film';
import { Resident } from './resident';
import { PlanetImages } from './planetImages';


export interface Planet {
  id?: number;
  url: string;
  name: string;
  image?: Array<PlanetImages>;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents?: Array<Resident>;
  films?: Array<Film>;
}
