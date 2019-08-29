import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/state/app.state';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { GetConfig } from './core/store/actions/config.actions';
import { isPlanetsListLoading } from './core/store/selectors/planet.selector';
import { PlanetService } from './planets/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading$: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>,
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    this.loading$ = this.store.select(isPlanetsListLoading);
    this.store.dispatch(new GetConfig());
    this.planetService.test<Array<any>>().subscribe();
  }


}
