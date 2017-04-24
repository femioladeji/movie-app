import { Component } from '@angular/core';
import { MovieService } from '../shared/movie-service';
import { IAMovie } from '../shared/movie-interface';

@Component({
    moduleId: module.id,
    templateUrl: 'add-schedule.html'
})
export class AddSchedule{
    movie: IAMovie;
    date: string;
    time: string;
    
    constructor(private _movieService: MovieService ) {
        this.movie = this._movieService.movie;
    }

    addToSchedule() {
        console.log(chrome.storage);
        console.log(this.date, this.time);
    }
}