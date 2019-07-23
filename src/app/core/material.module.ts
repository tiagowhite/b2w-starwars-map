import {NgModule} from '@angular/core';

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
  DateAdapter,
  MatToolbarModule,
} from '@angular/material';
import {MaterialDateAdapter, MY_FORMATS} from './material-date-adapter';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

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
    MatToolbarModule
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
    MatToolbarModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MaterialDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class MaterialModule {
}
