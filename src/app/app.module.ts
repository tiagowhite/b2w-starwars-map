import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetItemComponent } from './planets/planet-item/planet-item.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { PlanetService } from './planets/planet.service';
import {HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './core/store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PlanetEffect } from './core/store/effects/planet.effect';
import { ConfigEffect } from './core/store/effects/config.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetItemComponent,
    PlanetDetailComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PlanetEffect, ConfigEffect]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
