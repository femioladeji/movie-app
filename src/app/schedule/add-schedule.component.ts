import {Component} from '@angular/core';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';
import {MovieService} from '../shared/movie-service';
import {IAMovie} from '../shared/movie-interface';

@Component({
  moduleId: module.id,
  templateUrl: 'add-schedule.html',
  styleUrls: ['add-schedule.css'],
  providers: [MdSnackBar]
})
export class AddSchedule {
  movie: IAMovie;
  date: string;
  time: string;
  link: string;

  constructor(private _movieService: MovieService, public _snackBar: MdSnackBar) {
    this.movie = this._movieService.movie;
  }

  addToSchedule() {
    // dates are used as the key, so to get movies in a day, you use the date as the key
    const detailsToSave = {
      title: this.movie.Title,
      scheduleTime: this.time,
      link: this.link,
      id: this.movie.imdbID
    };
    chrome.storage.local.get((data) => {
      const allSchedules = Object.assign({}, data['movie-app-schedules']);
      if (!allSchedules[this.date]) {
        allSchedules[this.date] = [detailsToSave];
      } else {
        allSchedules[this.date] = [...data['movie-app-schedules'][this.date], detailsToSave];
      }
      chrome.storage.local.set({'movie-app-schedules': allSchedules}, () => {
        detailsToSave['date'] = this.date;
        this._movieService.setAlarm(detailsToSave);
      });
    });
    this.openSnackBar();
  }

  openSnackBar() {
    let config = new MdSnackBarConfig();
    config.duration = 2000;
    this._snackBar.open("Movie successfully added", null, config);
  }
}
