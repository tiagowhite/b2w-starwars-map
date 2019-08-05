import {Action} from '@ngrx/store';
import {Config} from '../../models/config';

export enum ConfigActionsEnum {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
  public readonly type = ConfigActionsEnum.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigActionsEnum.GetConfigSuccess;
  constructor(public payload: Config) {
  }
}

export type ConfigActions = | GetConfig | GetConfigSuccess;
