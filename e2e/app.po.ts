export class DgtsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dgts-app h1')).getText();
  }
}
