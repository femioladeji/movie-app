import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie-service';
import { IMovies, IMovieResults } from '../shared/movie-interface';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css'],
  providers: [MovieService]
})

export class MovieList implements OnInit{
  title: string = 'Moviepedia';
  searchQuery: string;
  // the one below keeps track of the query that the result is displayed for
  searchedQuery: string;
  movieResults: IMovies[];
  totalResults: number;
  totalPages: number;
  loading: boolean = false;
  currentPage: number = 1;
  isOnline: boolean;

  constructor(private _movieService: MovieService, private _router: Router) {

  }

  ngOnInit() {
    if(window.navigator.onLine) {
      this.isOnline = true;
    } else {
      this.isOnline = false;
    }
  }

  searchMovies(): void {
    this.movieResults = [];
    this.currentPage = 1;
    this.performSearch(`s=${this.searchQuery}`);
    this.searchedQuery = this.searchQuery;
  }

  displayError(error: any): void {
    this.isOnline = true;
    this.loading = false;
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
    this.performSearch(`s=${this.searchedQuery}&page=${this.currentPage}`);
  }

  performSearch(url: string): void {
    this.loading = true;
    this._movieService.search(url)
    .subscribe(
      movieResults => {
        this.loading = false;
        this.movieResults = movieResults.Search;
        this.totalResults = parseInt(movieResults.totalResults);
        this.totalPages = Math.ceil(this.totalResults / 10);
      },
      error => this.displayError(error));
  }

  viewMovie(movieId: string): void {
      this._router.navigate(['/movie', movieId]);
  }
}
