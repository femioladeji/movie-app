import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MovieAppComponent } from './movie-app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        MovieAppComponent
    ],
    bootstrap: [ MovieAppComponent ]
})

export class MovieAppModule{ };
