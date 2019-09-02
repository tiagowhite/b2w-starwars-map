import { Planet } from './planet';

export interface PlanetsHttp {
  count: number;
  next: string;
  previous: string;
  results: Array<Planet>;
}
