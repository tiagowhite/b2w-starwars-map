import {Component, OnInit} from '@angular/core';
import {PlanetService} from './planet.service';
import {Planets} from './planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planetList: Planets;

  constructor(private planetService: PlanetService) {
  }

  ngOnInit() {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets<Planets>().subscribe(
      (planets: Planets) => {
        this.planetList = planets;
      }
    );
  }
}
