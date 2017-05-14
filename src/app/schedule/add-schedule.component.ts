import {Component} from '@angular/core';
import {MovieService} from '../shared/movie-service';
import {IAMovie} from '../shared/movie-interface';

@Component({
  moduleId: module.id,
  templateUrl: 'add-schedule.html'
})
export class AddSchedule {
  movie: IAMovie;
  date: string;
  time: string;
  message: string;

  constructor(private _movieService: MovieService) {
    this.movie = this._movieService.movie;
  }

  addToSchedule() {
    console.log(this.date, this.time);
    // dates are used as the key, so to get movies in a day, you use the date as the key
    const detailsToSave = {
      title: this.movie.Title,
      scheduleTime: this.time,
      id: this.movie.imdbID
    };
    chrome.storage.local.get((data) => {
      const allSchedules = Object.assign({}, data['movie-app-schedules']);
      if (!allSchedules[this.date]) {
        allSchedules[this.date] = [detailsToSave];
      } else {
        allSchedules[this.date] = [...data['movie-app-schedules'][this.date], detailsToSave];
      }
      chrome.storage.local.set({'movie-app-schedules': allSchedules});
    });
    this.showConfirmation();
  }

  showConfirmation(): void {
    this.message = 'Movie successfully added';
  }
}
