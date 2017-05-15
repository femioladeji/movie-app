import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MovieAppComponent } from './movie-app.component';
import { MovieList } from './movie-list/movie-list.component';
import { MovieDetail } from './movie-detail/movie-detail.component';
import { AddSchedule } from './schedule/add-schedule.component';
import { ViewSchedule } from './view-schedule/view-schedule.component';
import { TimeTransform } from './shared/time.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', component: MovieList },
            { path: 'movie/:id', component: MovieDetail },
            { path: 'schedule', component: AddSchedule },
            { path: 'view-schedule', component: ViewSchedule }
        ])
    ],
    declarations: [
        MovieAppComponent,
        MovieList,
        MovieDetail,
        AddSchedule,
        ViewSchedule,
        TimeTransform
    ],
    bootstrap: [ MovieAppComponent ]
})

export class MovieAppModule{ };
