import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { GetPlanet } from '../../store/actions/planet.actions';
import { selectSelectedPlanet } from '../../store/selectors/planet.selector';
import { log } from 'util';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planet$ = this.store.pipe(select(selectSelectedPlanet));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new GetPlanet(this.route.snapshot.params.url));
  }

}
