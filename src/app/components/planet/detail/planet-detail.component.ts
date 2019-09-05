import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../../../models/planet';


@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  @Input() planet: Planet;

  constructor() {
  }

  ngOnInit() {

  }


}
