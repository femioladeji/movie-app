import { NgModule } from '@angular/core';
import { MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdButtonModule,
    MdCardModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdCardModule
  ]
})
export class MovieMaterialModule { }
