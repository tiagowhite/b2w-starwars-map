import { Component, OnInit, TemplateRef } from '@angular/core';
import { selectPlanetList } from '../../store/selectors/planet.selector';
import { AppState } from '../../store/state/app.state';
import { Router } from '@angular/router';
import { GetPlanets } from '../../store/actions/planet.actions';
import { Store, select } from '@ngrx/store';
import { PlanetOverlayService } from '../../components/core/planet-overlay/planet-overlay.service';
import { PlanetDetailComponent } from '../../components/planet/detail/planet-detail.component';
import { log } from 'util';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets$ = this.store.pipe(select(selectPlanetList));

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private planetOverlay: PlanetOverlayService
  ) {
    this.store.dispatch(new GetPlanets());
  }

  ngOnInit() {
  }

  goToPlanet(event: any) {
    const url = encodeURI(event);
    this.showPlanetDetail(null, origin);
  }

  showPlanetDetail(content: TemplateRef<any>, origin) {
    const ref = this.planetOverlay.open<{ data: number[] }>({
      //content: PlanetDetailComponent,
      content,
      origin,
      width: '100%',
      data: {
        data: [1, 2, 3]
      }
    });

    ref.afterClosed$.subscribe(res => {
      log(res);
    });

  }

}
