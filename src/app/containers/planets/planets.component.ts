import { Component, OnInit } from '@angular/core';
import { selectPlanetList } from '../../store/selectors/planet.selector';
import { AppState } from '../../store/state/app.state';
import { Router } from '@angular/router';
import { GetPlanets } from '../../store/actions/planet.actions';
import { Store, select } from '@ngrx/store';
import { log } from 'util';

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
    const url = encodeURI(event);
    this.router.navigate(['/planets', url]).then();
  }

}
