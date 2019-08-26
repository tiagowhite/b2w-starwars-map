import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, share } from 'rxjs/operators';
import { AppState } from './core/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { StartLoading } from './core/store/actions/ui.actions';
import { getUiState } from './core/store/selectors/ui.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading$ = this.store.pipe(select(getUiState));

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new StartLoading());
  }


}
