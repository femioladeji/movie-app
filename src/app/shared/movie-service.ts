import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IMovieResults, IAMovie, IDaySchedule} from './movie-interface';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';
import 'rxjs/Operator/map';
import { secret } from './secret';

@Injectable()
export class MovieService {
  private _URL: string = `http://www.omdbapi.com/?apikey=${secret.API}&`;
  public movie: IAMovie;

  constructor(private _http: Http, private _snackBar: MdSnackBar) {

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

  setAlarm(alarmDetails): void {
    const { date, scheduleTime, id, title, link } = alarmDetails;
    const movieMoment = new Date(`${date}T${scheduleTime}`).getTime();
    chrome.alarms.create(`movie-alarm-${movieMoment}@#${title}@#${link}@#${id}`,
      { when: movieMoment });
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

  getTodaysDate(): string {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let month = mm.toString();
    let date = dd.toString();
    let yyyy = today.getFullYear();
    if (dd < 10) {
      date = `0${dd}`;
    }
    if ( mm < 10) {
      month = `0${mm}`;
    }
    return `${yyyy}-${month}-${date}`;
  }

  showMessage(message: string) {
    let config = new MdSnackBarConfig();
    config.duration = 2000;
    this._snackBar.open(message, null, config);
  }
}
