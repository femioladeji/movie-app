import {Component, OnInit} from '@angular/core';
import {MovieService} from './shared/movie-service';

@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MovieService]
})

export class MovieAppComponent implements OnInit {
  title: string = 'Moviepedia';

  constructor(private _movieService: MovieService) {
  }

  ngOnInit(): void {
  }
}
