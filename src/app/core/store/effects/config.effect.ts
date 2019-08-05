import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ConfigActionsEnum, GetConfig, GetConfigSuccess} from '../actions/config.actions';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Config} from '../../models/config';
import {ConfigService} from '../../services/config.service';

@Injectable()
export class ConfigEffect {

  @Effect()
  getConfig$ = this.actions.pipe(
    ofType<GetConfig>(ConfigActionsEnum.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: Config) => {
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private configService: ConfigService,
    private actions: Actions) {
  }
}
