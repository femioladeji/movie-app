import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { MovieService } from '../shared/movie-service';
import { IAMovie } from '../shared/movie-interface';

@Component({
    moduleId: module.id,
    templateUrl: './movie-detail.component.html',
    styleUrls: ['movie-detail.component.css']
})
export class MovieDetail implements OnInit {
    aMovie: IAMovie;
    imdbid: string;
    loading: boolean = true;

    constructor(private _activeRoute: ActivatedRoute, private _movieService: MovieService) {

    }

    formatTime(time: string): string {
        const inMinutes: number = parseInt(time);
        const hours: number = Math.floor(inMinutes/60);
        // const hourText = ()
        const minutes: number = inMinutes % 60;
        let returnText: string = (hours >= 1) ? hours + ((hours === 1) ? ' hour ' : ' hours ') : '';
        returnText += `${minutes} minutes`;
        return returnText;
    }

    ngOnInit(): void {
        // make request to get full movie info
        this.imdbid = this._activeRoute.snapshot.params['id'];
        console.log(this.imdbid);
        this._movieService.getAMovie(`i=${this.imdbid}&plot=full`)
        .subscribe((theMovie) => {
            this.loading = false;
            console.log(theMovie);
            this.aMovie = theMovie
        }, (error) => {
            this.loading = false;
            console.log(error);
        })
    }
}