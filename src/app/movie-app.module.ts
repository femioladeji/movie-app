import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// custom module
import { MovieMaterialModule } from './material-module';

// components
import { MovieAppComponent } from './movie-app.component';
import { MovieList } from './movie-list/movie-list.component';
import { MovieDetail } from './movie-detail/movie-detail.component';
import { AddSchedule } from './schedule/add-schedule.component';
import { ViewSchedule } from './view-schedule/view-schedule.component';
import { StarRating } from './star-rating/star-rating.component';
import { AnalogueClock } from './analogue-clock/analogue-clock';

// pipe and filters
import { TimeTransform } from './shared/time.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MovieMaterialModule,
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
        StarRating,
        AnalogueClock,
        TimeTransform
    ],
    bootstrap: [ MovieAppComponent ]
})

export class MovieAppModule { };
