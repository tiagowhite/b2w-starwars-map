import {Planet} from './planet';

export interface Planets {
  count: number;
  next: string;
  previous: string;
  results: Array<Planet>;
}
