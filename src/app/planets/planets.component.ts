import { Component, OnInit } from '@angular/core';
import { selectPlanetList } from '../core/store/selectors/planet.selector';
import { AppState } from '../core/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { GetPlanets } from '../core/store/actions/planet.actions';
import { StartLoading } from '../core/store/actions/ui.actions';
import { Observable } from 'rxjs';
import { Planets } from './planets';
import { Planet } from './planet';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planetList$: Observable<Array<Planet>>;

  constructor(private store: Store<AppState>) {
    this.planetList$ = this.store.pipe(select(selectPlanetList));
  }

  ngOnInit() {
    this.store.dispatch(new StartLoading());
    this.store.dispatch(new GetPlanets());
  }

}
