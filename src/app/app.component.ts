import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlanetsListLoading } from './store/selectors/planet.selector';
import { selectConfig } from './store/selectors/config.selector';
import { Config } from './models/config';
import { GetConfig } from './store/actions/config.actions';
import { PlanetService } from './services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config$: Observable<Config>;
  images = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {
    this.config$ = this.store.pipe(select(selectConfig));
  }

  ngOnInit() {
    this.store.dispatch(new GetConfig());

  }


}
