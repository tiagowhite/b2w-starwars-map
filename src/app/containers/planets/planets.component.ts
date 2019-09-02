import { Component, OnInit } from '@angular/core';
import { selectPlanetList } from '../../store/selectors/planet.selector';
import { AppState } from '../../store/state/app.state';
import { Router } from '@angular/router';
import { GetPlanets } from '../../store/actions/planet.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets$ = this.store.pipe(select(selectPlanetList));

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new GetPlanets());
  }

  ngOnInit() {
  }

  goToPlanet(event: any) {
    const name = encodeURI(event.name);
    const url = encodeURI(event.url);
    this.router.navigate(['/planet', name, url]).then();
  }

}
