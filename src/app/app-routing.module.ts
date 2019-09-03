import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PlanetComponent } from './containers/planet/planet.component';
import { PlanetsComponent } from './containers/planets/planets.component';


const routes: Routes = [
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/:name', component: PlanetComponent},
  {path: '', redirectTo: '/planets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
