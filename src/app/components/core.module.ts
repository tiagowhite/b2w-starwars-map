import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { PlanetOverlayComponent } from './core/planet-overlay/planet-overlay.component';


@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, PlanetOverlayComponent],
  entryComponents: [PlanetOverlayComponent]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
