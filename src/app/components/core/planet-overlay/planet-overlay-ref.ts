import { TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';


export interface PlanetOverlayCloseEvent<T = any> {
  type: 'backdropClick' | 'close';
  data: T;
}

export type PlanetOverlayContent = TemplateRef<any> | Type<any> | string;

export class PlanetOverlayRef<T = any> {
  private afterClosed = new Subject<PlanetOverlayCloseEvent<T>>();
  afterClosed$ = this.afterClosed.asObservable();

  constructor(public overlay: OverlayRef, public content: PlanetOverlayContent, public data: T) {
    overlay.backdropClick().subscribe(() => {
        this._close('backdropClick', null);
      });
  }

  close(data?: T) {
    this._close('close', data);
  }

  private _close(type: PlanetOverlayCloseEvent['type'], data?: T) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }

}
