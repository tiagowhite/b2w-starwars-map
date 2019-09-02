import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ConfigActionsEnum, GetConfig, GetConfigSuccess } from '../actions/config.actions';
import { map, switchMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Config } from '../../models/config';
import { ConfigService } from '../../services/config.service';

@Injectable()
export class ConfigEffect {

  @Effect()
  getConfig$ = this.actions.pipe(
    ofType<GetConfig>(ConfigActionsEnum.GetConfig),
    switchMap(() => this.configService.getRandomSeed()),
    switchMap((config: Config) => of(new GetConfigSuccess(config))),
  );

  constructor(
    private configService: ConfigService,
    private actions: Actions) {
  }
}
