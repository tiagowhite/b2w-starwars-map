import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlanetsComponent} from './planets.component';
import {FormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import {PlanetItemComponent} from './planet-item/planet-item.component';
import {PlanetDetailComponent} from './planet-detail/planet-detail.component';
import {MaterialModule} from '../core/material.module';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  }
];


@NgModule({
  declarations: [PlanetsComponent, PlanetItemComponent, PlanetDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanetsModule {
}
