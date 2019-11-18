import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planet } from '../../../models/planet';
import { PlanetImages } from '../../../models/planetImages';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  @Input() planets: Array<Planet>;
  @Input() images: Array<PlanetImages>;
  @Output() planetSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  filterPlanetImage(images: PlanetImages[], planets: Planet ): { name: string, path: string } {
    return images.find(image => image.name === planets.name);
  }

  navigateToPlanet(url: string) {
    this.planetSelected.emit(url);
  }

}
