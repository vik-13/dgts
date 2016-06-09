import { DgtsPage } from './app.po';

describe('dgts App', function() {
  let page: DgtsPage;

  beforeEach(() => {
    page = new DgtsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dgts works!');
  });
});
