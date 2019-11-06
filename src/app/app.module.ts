import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './components/core.module';
import { PlanetService } from './services/planet.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './components/material.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { PlanetEffect } from './store/effects/planet.effect';
import { ConfigEffect } from './store/effects/config.effect';
import { appReducer } from './store/reducers/app.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
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
