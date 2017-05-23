import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IMovieResults, IAMovie, IDaySchedule} from './movie-interface';
import 'rxjs/Operator/map';
import { secret } from './secret';

@Injectable()
export class MovieService {
  private _URL: string = `http://www.omdbapi.com/?apikey=${secret.API}&`;
  public movie: IAMovie;

  constructor(private _http: Http) {

  }

  search(parameters: string): Observable<IMovieResults> {
    return this._http.get(`${this._URL}${parameters}`)
      .map((response: Response) => <IMovieResults>response.json())
      .catch(this.handleError)
  }

  handleError(errorResponse: Response) {
    console.log(errorResponse);
    return Observable.throw(errorResponse.json().error || 'server error');
  }

  getAMovie(parameters: string): Observable<IAMovie> {
    return this._http.get(`${this._URL}${parameters}`)
      .map((response: Response) => <IAMovie>response.json())
      .catch(this.handleError)
  }

  getAllSchedules() {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      chrome.storage.local.get('movie-app-schedules', (storedData) => {
        resolve(storedData['movie-app-schedules']);
      });
    }));
  }

  clearAlarms(): void {
    chrome.alarms.clear('movie-alarm');
  }

  setAlarm(): void {
    console.log('here');
    this.getTodaysMovies().then((forToday: IDaySchedule[]) => {
      // sort the movie in descending order and pick the closest one to the current time;
      forToday.sort((a, b) => {
        return (a.scheduleTime > b.scheduleTime) ? 1 : -1;
      });
      let currentDate = new Date();
      forToday.some((eachSchedule) => {
        let scheduleTimeInfo = eachSchedule.scheduleTime.split(':');
        let movieMoment = new Date(currentDate.getFullYear(),
          currentDate.getMonth(), currentDate.getDate(),
          parseInt(scheduleTimeInfo[0]), parseInt(scheduleTimeInfo[1])).getTime();
        let currentMoment = currentDate.getTime();
        if(movieMoment > currentMoment) {
          chrome.alarms.create('movie-alarm', { when: movieMoment });
          this.setNextMovie(eachSchedule);
          return movieMoment > currentMoment;
        }
      });
    });
  }

  getTodaysMovies() {
    return new Promise((resolve) => {
      this.getAllSchedules().subscribe(
        allSchedules => {
          const dateTimeStamp = new Date();
          const currentDate = `${dateTimeStamp.getFullYear()}-${this.formatMonth(dateTimeStamp.getMonth())}-${dateTimeStamp.getDate()}`;
          let todaysMovies = (allSchedules.hasOwnProperty(currentDate)) ? allSchedules[currentDate] : [];
          resolve(todaysMovies);
        }
      );
    });
  }

  formatMonth(month: number): string {
    return (month + 1 < 10) ? `0${month+1}` : `${month + 1}`;
  }

  setNextMovie(aMovieSchedule: IDaySchedule): void {
    chrome.storage.local.set({nextMovie: aMovieSchedule});
  }
}
