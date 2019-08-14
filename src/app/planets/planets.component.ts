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
  testList: Planets;

  constructor(private store: Store<AppState>, private planetService: PlanetService) {
  }

  ngOnInit() {
    /*this.store.dispatch(new GetPlanets());*/
    this.runTest();
  }


  private async runTest() {
    let totalResults: Planets;
    /*
    async getConditionalDataUsingAsync() {
    let data = await this.httpClient.get<Employee>(this.url).toPromise();
    if (data.id > 5) {
      let anotherUrl = 'http://dummy.restapiexample.com/api/v1/employee/23';
      this.conditionalAsyncResult = await this.httpClient.get<Employee>(anotherUrl).toPromise();
    }
    console.log('No issues, I will wait until promise is resolved..');
  }*/

    totalResults = await this.planetService.test<Planets>(1).toPromise();
    const range = Array.from(Array(7).keys());
    for (const page of range) {
      if (page > 0) {
        totalResults = await this.planetService.test<Planets>(page).toPromise().then(
          log(totalResults.results)
        );
      }

    }
    /*this.planetService.test<Planets>(1).subscribe(
      (test: Planets) => {
        this.testList = test.results.map((obj, index) => ({...obj, id: index }));
        log(this.test);
        this.testList = test;
        log(this.testList);
      }
    );*/
  }
}
