import { MovieAppPage } from './app.po';

describe('movie-app App', function() {
  let page: MovieAppPage;

  beforeEach(() => {
    page = new MovieAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('movie-app works!');
  });
});
