import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { AppState } from './core/store/state/app.state';
import { selectUi } from './core/store/selectors/ui.selector';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { GetConfig } from './core/store/actions/config.actions';

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

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {
    this.loading$ = this.store.pipe(select(selectUi));
  }

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }


}
