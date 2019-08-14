export interface Planet {
  id?: number;
  url: 'https://swapi.co/api/planets/';
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: [];
}
