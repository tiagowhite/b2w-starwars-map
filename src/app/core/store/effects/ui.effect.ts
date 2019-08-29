import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StartLoading, StopLoading, UiActions, UiActionsEnum } from '../actions/ui.actions';
import { of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UiEffect {

  @Effect()
  startLoading = this.actions.pipe(
    ofType<UiActions>(UiActionsEnum.START_LOADING),
    pipe(map(() => of(new StartLoading())))
  );

  @Effect()
  stopLoading = this.actions.pipe(
    ofType<UiActions>(UiActionsEnum.STOP_LOADING),
    pipe(map(() => of(new StopLoading())))
  );

  constructor(
    private actions: Actions
  ) {}

}


