import {Component, Input, OnInit} from '@angular/core';
import {Planets} from '../planets';
import {Planet} from '../planet';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  @Input() planetList: Array<Planet>;

  constructor() {
  }

  ngOnInit() {
  }

}
