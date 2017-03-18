export class MovieAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('movie-app-app h1')).getText();
  }
}
