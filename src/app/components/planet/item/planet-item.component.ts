import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planet } from '../../../models/planet';
import { log } from 'util';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  @Input() planets: Planet[];
  @Output() planetSelected: EventEmitter<Planet> = new EventEmitter<Planet>();

  constructor() {}

  ngOnInit() {
  }

  navigateToPlanet(planet: Planet) {
    this.planetSelected.emit(planet);
  }

}
