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