import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie-service';

@Component({
  moduleId: module.id,
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css'],
  providers: [MovieService]
})
export class ViewSchedule implements OnInit {
  title: string = 'All schedules';
  allSchedules: any = {};
  allScheduleDates: any[] = [];

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getAllSchedules().subscribe(schedules => {
      this.updateMovieList(schedules);
    });
  }

  deleteSchedule(index: number, date: string): void {
    this._movieService.getAllSchedules().subscribe(schedules => {
      const theMovieDetails = schedules[date][index];
      const dateSchedule = schedules[date];
      dateSchedule.splice(index, 1);
      schedules[date] = dateSchedule;
      if(dateSchedule.length === 0) {
        delete schedules[date];
      }
      chrome.storage.local.set({'movie-app-schedules': schedules});
      // delete alarm
      theMovieDetails['date'] = date;
      this._movieService.deleteAlarm(theMovieDetails);
      this.updateMovieList(schedules);
      this._movieService.showMessage('Schedule deleted');
    });
  }

  updateMovieList(schedules) {
    const today = this._movieService.getTodaysDate();
    try {
      this.allScheduleDates = Object.keys(schedules).filter((each) =>
        each >= today
      );
      this.allSchedules = schedules;
    } catch (err) {
      this.allScheduleDates = [];
      this.allSchedules = schedules;
    }
  }
}
