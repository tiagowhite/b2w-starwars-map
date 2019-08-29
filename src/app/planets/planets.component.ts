import { Component, OnInit } from '@angular/core';
import { selectPlanetList } from '../core/store/selectors/planet.selector';
import { AppState } from '../core/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetPlanets } from '../core/store/actions/planet.actions';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {


  planetList$ = this.store.select(selectPlanetList);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetPlanets());
  }

  ngOnInit() {

  }

}
