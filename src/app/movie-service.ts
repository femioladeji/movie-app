import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IMovies } from './movie-interface';
import 'rxjs/Operator/map';

@Injectable()
export class MovieService {
    private _URL: string = 'http://www.omdbapi.com/?';

    constructor(private _http: Http) {

    }

    search(parameters: string): Observable<IMovies[]> {
        return this._http.get(`${this._URL}${parameters}`)
            .map((response: Response) => <IMovies[]>response.json().Search)
            .catch(this.handleError)
    }

    handleError(errorResponse: Response) {
        console.log(errorResponse);
        return Observable.throw(errorResponse.json().error || 'server error');
    }
}
