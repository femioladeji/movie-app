import { Component } from '@angular/core';
import { MovieService } from './movie-service';
import { IMovies, IMovieResults } from './movie-interface';

@Component({
  moduleId: module.id,
  selector: 'movie-app-app',
  templateUrl: 'movie-app.component.html',
  styleUrls: ['movie-app.component.css'],
  providers: [MovieService]
})

export class MovieAppComponent {
  title: string = 'Moviepedia';
  searchQuery: string;
  // the one below keeps track of the query that the result is displayed for
  searchedQuery: string;
  movieResults: IMovies[];
  totalResults: number;
  totalPages: number;
  loading: boolean = false;
  currentPage: number = 1;

  constructor(private _movieService: MovieService) {

  }

  searchMovies(): void {
    this.loading = true;
    this.movieResults = [];
    this.currentPage = 1;
    perform
  }

  displayError(error: any): void {
    console.log(error);
  }

  navigate(direction: string): void {
    this.loading = true;
    this.movieResults = [];
    switch(direction) {
      case 'next': this.currentPage += 1; break;
      case 'prev': this.currentPage -= 1; break;
      case 'last': this.currentPage = this.totalPages; break;
      case 'first': this.currentPage = 1;
    }
    this._movieService.search(`s=${this.searchedQuery}&page=${this.currentPage}`)
    .subscribe(
      movieResults => {
        this.loading = false;
        this.movieResults = movieResults.Search;
      },
      error => this.displayError(error));
  }

  performSeach(url: string): void {

  }
}
