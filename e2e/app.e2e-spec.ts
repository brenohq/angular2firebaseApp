import { Angular2firebaseAppPage } from './app.po';

describe('angular2firebase-app App', function() {
  let page: Angular2firebaseAppPage;

  beforeEach(() => {
    page = new Angular2firebaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
