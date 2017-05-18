import { NgModule } from '@angular/core';
import { MdInputModule, MdButtonModule, MdCardModule,
  MdMenuModule, MdIconModule, MdDatepickerModule, MdNativeDateModule,
  MdListModule } from '@angular/material';
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
    AccordionModule
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
    AccordionModule
  ]
})
export class MovieMaterialModule { }
