import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planet } from '../../../models/planet';
import { PlanetImages } from '../../../models/planetImages';
import { GetPlanets } from '../../../store/actions/planet.actions';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  @Input() planets: Array<Planet>;
  @Input() images: Array<PlanetImages>;
  @Output() planetSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageScrolled: EventEmitter<number> = new EventEmitter<number>();

  throttle = 300;
  scrollDistance = 2;
  limit = 7;
  page = 1;


  constructor() {
  }

  ngOnInit() {
  }

  onScrollEnd() {
    this.page += 1;
    if (this.page <= this.limit) {
      this.pageScrolled.emit(this.page);
    }
  }

  filterPlanetImage(images: PlanetImages[], planets: Planet): { name: string, path: string } {
    return images.find(image => image.name === planets.name);
  }

  navigateToPlanet(url: string) {
    this.planetSelected.emit(url);
  }

}
