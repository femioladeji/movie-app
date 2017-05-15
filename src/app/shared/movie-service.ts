import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IMovieResults, IAMovie} from './movie-interface';
import 'rxjs/Operator/map';

@Injectable()
export class MovieService {
  private _URL: string = 'http://www.omdbapi.com/?';
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
}
