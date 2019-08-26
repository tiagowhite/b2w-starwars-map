import { Action } from '@ngrx/store';

export enum UiActionsEnum {
  START_LOADING = '[UI] Start loading',
  STOP_LOADING = '[UI] Stop loading'
}

export class StartLoading implements Action {
  public readonly type = UiActionsEnum.START_LOADING;
}

export class StopLoading implements Action {
  public readonly type = UiActionsEnum.STOP_LOADING;
}

export type UiActions = | StartLoading | StopLoading;
