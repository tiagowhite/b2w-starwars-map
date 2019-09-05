import { Component, OnInit, TemplateRef } from '@angular/core';
import { isPlanetsListLoading, selectPlanetList } from '../../store/selectors/planet.selector';
import { AppState } from '../../store/state/app.state';
import { Router } from '@angular/router';
import { GetPlanets } from '../../store/actions/planet.actions';
import { Store, select } from '@ngrx/store';
import { PlanetOverlayService } from '../../components/core/planet-overlay/planet-overlay.service';
import { PlanetContainerComponent } from '../planet/planet-container.component';


@Component({
  selector: 'app-planets',
  templateUrl: './planets-container.component.html',
  styleUrls: ['./planets-container.component.scss']
})
export class PlanetsContainerComponent implements OnInit {

  planets$ = this.store.pipe(select(selectPlanetList));

  constructor(private store: Store<AppState>, private router: Router, private planetOverlay: PlanetOverlayService) {
    this.store.dispatch(new GetPlanets());
  }

  ngOnInit() {
  }

  goToPlanet(event: any) {
    this.showPlanetDetail(null, origin, event);
  }

  showPlanetDetail(content: TemplateRef<any>, origin, selectedPlanet) {
    const ref = this.planetOverlay.open<{ selectedPlanet: string }>({
      content: PlanetContainerComponent,
      origin,
      width: '100%',
      height: '100%',
      data: {
        selectedPlanet
      }
    });

    ref.afterClosed$.subscribe();

  }

}
