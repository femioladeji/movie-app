import {Component, OnInit} from '@angular/core';
import {MovieService} from './shared/movie-service';

@Component({
  moduleId: module.id,
  selector: 'movie-app-app',
  templateUrl: 'movie-app.component.html',
  styleUrls: ['movie-app.component.css'],
  providers: [MovieService]
})

export class MovieAppComponent implements OnInit {
  title: string = 'Moviepedia';

  constructor(private _movieService: MovieService) {
  }

  ngOnInit(): void {
    this._movieService.clearAlarms();
    this._movieService.setAlarm();

    chrome.alarms.onAlarm.addListener(data => {
      if (data.name === 'movie-alarm') {
        chrome.storage.local.get('nextMovie', (movie) => {
          chrome.notifications.create({
            type: "basic",
            title: "MOVIE TIME",
            message: `Time has come to relax with ${movie['nextMovie'].title}`,
            iconUrl: "img/logo.png"
          });
        })
      }
    })
  }
}
