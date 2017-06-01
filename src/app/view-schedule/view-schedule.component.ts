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
    const today = this._movieService.getTodaysDate();
    this._movieService.getAllSchedules().subscribe(schedules => {
      try {
        this.allScheduleDates = Object.keys(schedules).filter((each) =>
          each >= today
        );
        this.allSchedules = schedules;
      } catch (err) {
        this.allScheduleDates = [];
        this.allSchedules = schedules;
      }
    });
  }
}
