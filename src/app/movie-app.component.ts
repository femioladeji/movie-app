import { Component } from '@angular/core';
import { MovieService } from './movie-service';

@Component({
  moduleId: module.id,
  selector: 'movie-app-app',
  templateUrl: 'movie-app.component.html',
  styleUrls: ['movie-app.component.css'],
  providers: [MovieService]
})

export class MovieAppComponent {
  title: string = 'Moviepedia';
  movieTitle: string;

  constructor(private _movieService: MovieService) {

  }

  searchMovies(): void {
    this._movieService.search(`s=${this.movieTitle}`)
      .subscribe((x) => {
        console.log(x);
      }, (error) => {
        console.log(error);
      });
  }
}
