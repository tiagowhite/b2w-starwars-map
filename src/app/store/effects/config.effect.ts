import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ConfigActionsEnum, GetConfig, GetConfigError, GetConfigSuccess } from '../actions/config.actions';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Config } from '../../models/config';
import { ConfigService } from '../../services/config.service';

@Injectable()
export class ConfigEffect {

  @Effect()
  getConfig$ = this.actions.pipe(
    ofType<GetConfig>(ConfigActionsEnum.GetConfig),
    switchMap(() => this.configService.getRandomSeed()),
    switchMap((config: Config) => of(new GetConfigSuccess(config))),
    catchError((err) => of(new GetConfigError(err)))
  );

  constructor(
    private configService: ConfigService,
    private actions: Actions) {
  }
}
