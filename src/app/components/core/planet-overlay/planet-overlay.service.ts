import { Injectable, Injector } from '@angular/core';
import { ConnectionPositionPair, Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { PlanetOverlayContent, PlanetOverlayRef } from './planet-overlay-ref';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { PlanetOverlayComponent } from './planet-overlay.component';


export interface PlanetOverlayParams<T> {
  width?: string | number;
  height?: string | number;
  origin: HTMLElement;
  content: PlanetOverlayContent;
  data?: T;
}


@Injectable({
  providedIn: 'root'
})
export class PlanetOverlayService {
  constructor(private  overlay: Overlay, private injector: Injector) {
  }

  private static getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      },
    ];
  }

  open<T>({origin, content, data, width, height}: PlanetOverlayParams<T>): PlanetOverlayRef<T> {
    const overlayRef = this.overlay.create(this.getOverlayConfiig({
      origin, width, height
    }));
    const planetOverlayRef = new PlanetOverlayRef<T>(overlayRef, content, data);
    const injector = this.createInjector(planetOverlayRef, this.injector);

    overlayRef.attach(new ComponentPortal(PlanetOverlayComponent, null, injector));

    return planetOverlayRef;
  }


  private getOverlayConfiig({origin, width, height}): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: 'planet-overlay-backdrop',
      positionStrategy: this.getOverlayPosition(origin),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  private getOverlayPosition(origin: HTMLElement): PositionStrategy {
    return this.overlay.position()
      .flexibleConnectedTo(origin)
      .withPositions(PlanetOverlayService.getPositions())
      .withFlexibleDimensions(false)
      .withPush(false);
  }

  createInjector(planetOverlayRef: PlanetOverlayRef, injector: Injector) {
    const tokens = new WeakMap([[PlanetOverlayRef, planetOverlayRef]]);
    return new PortalInjector(injector, tokens);
  }

}
