import { Component, OnInit, TemplateRef } from '@angular/core';
import { selectPlanetList } from '../../store/selectors/planet.selector';
import { AppState } from '../../store/state/app.state';
import { Router } from '@angular/router';
import { GetPlanets } from '../../store/actions/planet.actions';
import { Store, select } from '@ngrx/store';
import { PlanetOverlayService } from '../../components/core/planet-overlay/planet-overlay.service';
import { PlanetContainerComponent } from '../planet/planet-container.component';
import { Observable } from 'rxjs';
import { Planet } from '../../models/planet';


@Component({
  selector: 'app-planets',
  templateUrl: './planets-container.component.html',
  styleUrls: ['./planets-container.component.scss']
})
export class PlanetsContainerComponent implements OnInit {

  planets$: Observable<Planet[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private planetOverlay: PlanetOverlayService,
  ) {
    this.planets$ = this.store.pipe(select(selectPlanetList));
  }

  ngOnInit() {
    this.store.dispatch(new GetPlanets());
  }

  goToPlanet(event: string) {
    this.showPlanetDetail(null, origin, event);
  }

  showPlanetDetail(content: TemplateRef<any>, origin, selectedPlanet) {
    const ref = this.planetOverlay.open<{ selectedPlanet: string, state: boolean }>({
      content: PlanetContainerComponent,
      origin,
      width: '100%',
      height: '100%',
      data: {
        selectedPlanet,
        state: true
      }
    });

    ref.afterClosed$.subscribe();
  }


}
