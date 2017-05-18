import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    constructor(private _activeRoute: ActivatedRoute,
        private _movieService: MovieService,
        private _router: Router) {
    }

    ngOnInit(): void {
        // make request to get full movie info
        this.imdbid = this._activeRoute.snapshot.params['id'];
        this._movieService.getAMovie(`i=${this.imdbid}&plot=full`)
        .subscribe((theMovie) => {
            this.loading = false;
            this.aMovie = theMovie
        }, (error) => {
            this.loading = false;
            console.log(error);
        });
    }

    addSchedule() {
        this._movieService.movie = this.aMovie;
        this._router.navigate(['/schedule']);
    }
}
