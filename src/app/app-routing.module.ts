import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PlanetContainerComponent } from './containers/planet/planet-container.component';
import { PlanetsContainerComponent } from './containers/planets/planets-container.component';


const routes: Routes = [
  {path: 'planets', component: PlanetsContainerComponent},
  {path: 'planets/:name', component: PlanetContainerComponent},
  {path: '', redirectTo: '/planets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
