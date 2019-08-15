import { Component, OnInit } from '@angular/core';
import { selectPlanetList } from '../core/store/selectors/planet.selector';
import { AppState } from '../core/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { PlanetService } from './planet.service';
import { Planets } from './planets';
import { Planet } from './planet';
import { of, pipe } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { debug, log } from 'util';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planetList = this.store.pipe(select(selectPlanetList));
  protected tempList: Array<Planet>;

  constructor(private store: Store<AppState>, private planetService: PlanetService) {
  }

  ngOnInit() {
    /*this.store.dispatch(new GetPlanets());*/
    this.runTest();
  }


  private runTest() {
    this.planetService.test<Array<Planet>>().then(
      (result: Array<Planet>) => {
        this.tempList = result;
        // log(this.tempList);
      }
    );
  }

}
