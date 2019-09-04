import { Action } from '@ngrx/store';
import { Planet } from '../../models/planet';

export enum PlanetActionsEnum {
  GetPlanets = '[Get Planets] Get Planets',
  GetPlanetsSuccess = '[Get Planets] Get Planets Success',
  GetPlanetsError = '[Get Planets Error] Get Planets Error',
  GetPlanet = '[Get Planet] Get Planet',
  GetPlanetSuccess = '[Get Planet] Get Planet Success',
  GetPlanetError = '[Get Planet Error] Get Planet Error'
}

export class GetPlanets implements Action {
  public readonly type = PlanetActionsEnum.GetPlanets;
}

export class GetPlanetsSuccess implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetsSuccess;

  constructor(public payload: Array<Planet>) {
  }
}

export class GetPlanetsError implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetsError;

  constructor(public payload: string) {
  }

}

export class GetPlanet implements Action {
  public readonly type = PlanetActionsEnum.GetPlanet;
  constructor(public payload: Planet ) {}

}

export class GetPlanetSuccess implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetSuccess;

  constructor(public payload: Planet) {
  }
}

export class GetPlanetError implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetError;

  constructor(public payload: string) {
  }
}

export type PlanetActions = GetPlanets | GetPlanetsSuccess | GetPlanet | GetPlanetSuccess | GetPlanetsError | GetPlanetError;
