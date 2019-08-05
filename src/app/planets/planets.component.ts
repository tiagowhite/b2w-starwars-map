import {Component, OnInit} from '@angular/core';
import {PlanetService} from './planet.service';
import {Planet} from './planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planetList: Array<Planet>;

  constructor(private planetService: PlanetService) {
  }

  ngOnInit() {
    this.loadPlanets();
  }

  private loadPlanets() {
    this.planetService.getPlanets<Array<Planet>>().subscribe(
      (planets: Array<Planet>) => {
        this.planetList = planets;
      }
    );
  }
}
