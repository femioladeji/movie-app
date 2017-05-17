import { NgModule } from '@angular/core';
import { MdInputModule, MdButtonModule, MdCardModule,
  MdMenuModule, MdIconModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule
  ]
})
export class MovieMaterialModule { }
