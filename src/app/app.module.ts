import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './components/core.module';
import { PlanetService } from './services/planet.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './components/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { environment } from '../environments/environment';


import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { PlanetEffect } from './store/effects/planet.effect';
import { ConfigEffect } from './store/effects/config.effect';
import { appReducer } from './store/reducers/app.reducer';
import { PlanetsComponent } from './containers/planets/planets.component';
import { PlanetComponent } from './containers/planet/planet.component';
import { PlanetItemComponent } from './components/planet/item/planet-item.component';
import { PlanetDetailComponent } from './components/planet/detail/planet-detail.component';

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetComponent,
    PlanetItemComponent,
    PlanetDetailComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([PlanetEffect, ConfigEffect]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
