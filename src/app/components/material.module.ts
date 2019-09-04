import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatDialogModule,
  MatIconModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatChipsModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
import { PlanetOverlayComponent } from './core/planet-overlay/planet-overlay.component';


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    OverlayModule
  ],
  providers: []

})
export class MaterialModule {
}
