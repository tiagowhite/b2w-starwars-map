import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planet } from '../../../models/planet';
import { log } from 'util';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  @Input() planets: Array<Planet>;
  @Output() planetSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  navigateToPlanet(url: string) {
    this.planetSelected.emit(url);
  }

}
