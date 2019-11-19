import { Action } from '@ngrx/store';
import { Planet } from '../../models/planet';
import { PlanetImages } from '../../models/planetImages';

export enum PlanetActionsEnum {

  GetPlanets = '[Get Planets] Get Planets',
  GetPlanetsSuccess = '[Get Planets Success] Get Planets Success',

  GetPlanetsError = '[Get Planets Error] Get Planets Error',
  SetPlanetImages = '[Set Planet Images] Set Planet Images',

  GetPlanet = '[Get Planet] Get Planet',
  GetPlanetSuccess = '[Get Planet Success] Get Planet Success',
  GetPlanetError = '[Get Planet Error] Get Planet Error',


  GetPlanetImages = '[Get Planet Images] Get Planet Images',
  GetPlanetImagesSuccess = '[Get Planet Images Success] Get Planet Images Success',
  GetPlanetImagesError = '[Get Planet Images Error] Get Planet Images Error'
}

export class GetPlanet implements Action {
  public readonly type = PlanetActionsEnum.GetPlanet;

  constructor(public payload: string) {
  }
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

export class GetPlanets implements Action {
  public readonly type = PlanetActionsEnum.GetPlanets;

  constructor(public payload: { page: number }) {
  }
}

export class GetPlanetsSuccess implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetsSuccess;

  constructor(public payload: any) {
  }
}


export class GetPlanetsError implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetsError;

  constructor(public payload: string) {
  }
}

export class GetPlanetImages implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetImages;

}

export class GetPlanetImagesSuccess implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetImagesSuccess;

  constructor(public payload: Array<PlanetImages>) {
  }
}

export class GetPlanetImagesError implements Action {
  public readonly type = PlanetActionsEnum.GetPlanetImagesError;

  constructor(public payload: string) {
  }
}

export class SetPlanetImages implements Action {
  public readonly type = PlanetActionsEnum.SetPlanetImages;

  constructor(public payload: Array<Planet>) {
  }
}


export type PlanetActions =
  GetPlanets
  | GetPlanetsSuccess
  | GetPlanet
  | GetPlanetSuccess
  | GetPlanetsError
  | GetPlanetError
  | GetPlanetImages
  | GetPlanetImagesSuccess
  | GetPlanetImagesError
  | SetPlanetImages;
