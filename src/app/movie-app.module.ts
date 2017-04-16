import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MovieAppComponent } from './movie-app.component';
import { MovieList } from './movie-list/movie-list.component';
import { MovieDetail } from './movie-detail/movie-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', component: MovieList },
            { path: 'movie/:id', component: MovieDetail }
        ])
    ],
    declarations: [
        MovieAppComponent,
        MovieList,
        MovieDetail
    ],
    bootstrap: [ MovieAppComponent ]
})

export class MovieAppModule{ };
