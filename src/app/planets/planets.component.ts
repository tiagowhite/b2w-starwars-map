import { Component, OnInit } from '@angular/core';
import { selectPlanetList } from '../core/store/selectors/planet.selector';
import { AppState } from '../core/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { GetPlanets } from '../core/store/actions/planet.actions';
import { PlanetService } from './planet.service';
import { Planets } from './planets';
import { log } from 'util';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planetList = this.store.pipe(select(selectPlanetList));
  test: { orbital_period: number; surface_water: number; diameter: number; gravity: string; name: string; residents: []; climate: string; id: number; rotation_period: number; terrain: string; url: "https://swapi.co/api/planets/"; population: number }[];

  constructor(private store: Store<AppState>, private planetService: PlanetService) {
  }

  ngOnInit() {
    /*this.store.dispatch(new GetPlanets());*/
    this.runTest();
  }


  private runTest() {
    this.planetService.test<Planets>().subscribe(
      (test: Planets) => {
        this.test = test.results.map((obj, index) => ({...obj, id: index }));
        log(this.test);
      }
    );
  }
}
