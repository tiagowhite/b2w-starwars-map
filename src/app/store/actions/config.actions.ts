import { Action } from '@ngrx/store';
import { Config } from '../../models/config';

export enum ConfigActionsEnum {
  GetConfig = '[Get Config] Get Config',
  GetConfigSuccess = '[Get Config Success] Get Config Success',
  GetConfigError = '[Get Config Error]'
}

export class GetConfig implements Action {
  public readonly type = ConfigActionsEnum.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigActionsEnum.GetConfigSuccess;

  constructor(public payload: Config) {
  }
}

export class GetConfigError implements Action {
  public readonly type = ConfigActionsEnum.GetConfigError;

  constructor(public payload: string) {
  }
}

export type ConfigActions = | GetConfig | GetConfigSuccess | GetConfigError;
