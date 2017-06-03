import { NgModule } from '@angular/core';
import { MdInputModule, MdButtonModule, MdCardModule,
  MdMenuModule, MdIconModule, MdDatepickerModule, MdNativeDateModule,
  MdListModule, MdSnackBarModule } from '@angular/material';
import { AccordionModule } from 'ngx-accordion';

@NgModule({
  imports: [
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdListModule,
    AccordionModule,
    MdSnackBarModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdListModule,
    AccordionModule,
    MdSnackBarModule
  ]
})
export class MovieMaterialModule { }
