import { Component, OnInit, TemplateRef } from '@angular/core';
import { PlanetOverlayContent, PlanetOverlayRef } from './planet-overlay-ref';

@Component({
  selector: 'app-planet-overlay',
  templateUrl: './planet-overlay.component.html',
  styleUrls: ['./planet-overlay.component.scss']
})
export class PlanetOverlayComponent implements OnInit {

  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PlanetOverlayContent | any;
  context;
  state: boolean;

  constructor(private planetOverlayRef: PlanetOverlayRef) {
  }

  ngOnInit() {
    this.content = this.planetOverlayRef.content;

    this.state = this.planetOverlayRef.data.state;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }

    if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.planetOverlayRef.close.bind(this.planetOverlayRef)
      };
    }

  }

}
