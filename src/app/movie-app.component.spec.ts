import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MovieAppAppComponent } from '../app/movie-app.component';

beforeEachProviders(() => [MovieAppAppComponent]);

describe('App: MovieApp', () => {
  it('should create the app',
      inject([MovieAppAppComponent], (app: MovieAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'movie-app works!\'',
      inject([MovieAppAppComponent], (app: MovieAppAppComponent) => {
    expect(app.title).toEqual('movie-app works!');
  }));
});
