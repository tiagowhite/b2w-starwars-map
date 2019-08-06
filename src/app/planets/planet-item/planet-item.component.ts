import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planets } from '../planets';
import { Planet } from '../planet';
import { log } from 'util';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  @Input() planetList: Planet[];
  @Output() planetSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {
  }

  selectedPlanetHandler(id: number) {
    this.planetSelected.emit(id);
  }

}
