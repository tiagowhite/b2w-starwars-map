import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { GetPlanet } from '../../store/actions/planet.actions';
import { isPlanetsListLoading, selectSelectedPlanet } from '../../store/selectors/planet.selector';
import { PlanetOverlayRef } from '../../components/core/planet-overlay/planet-overlay-ref';
import { Observable } from 'rxjs';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planet-container',
  templateUrl: './planet-container.component.html',
  styleUrls: ['./planet-container.component.scss']
})
export class PlanetContainerComponent implements OnInit {

  selectedPlanet: string;
  planet$: Observable<Planet>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private planetOverlayRef: PlanetOverlayRef) {
    this.selectedPlanet = planetOverlayRef.data.selectedPlanet;
    this.planet$ = this.store.pipe(select(selectSelectedPlanet));
  }

  ngOnInit() {
    this.store.dispatch(new GetPlanet(this.selectedPlanet));
  }

  close() {
    this.planetOverlayRef.close();
  }

}
