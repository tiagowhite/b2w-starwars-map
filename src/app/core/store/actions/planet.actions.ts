import {Action} from '@ngrx/store';
import {Planet} from '../../../planets/planet';

export enum PlanetActionsEnum {
  GetPlanets = '[Planet] Get Planets',
  GetPlanetsSuccess = '[Planet] Get planets Success',
  GetPlanet = '[Planet] Get Planet',
  GetPlanetSuccess = '[Planet] Get Planet Success'
}

export class GetPlanets implements Action {
  public readonly type = PlanetActionsEnum.GetPlanets;
}

export class GetPlanetsSuccess implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetsSuccess;

  constructor(public payload: Array<Planet>) {
  }
}

export class GetPlanet implements Action {
  public readonly type = PlanetActionsEnum.GetPlanet;

  constructor(public payload: number) {

  }
}

export class GetPlanetSuccess implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetSuccess;

  constructor(public payload: Planet) {
  }
}

export type PlanetActions = GetPlanets | GetPlanetsSuccess | GetPlanet | GetPlanetSuccess;
