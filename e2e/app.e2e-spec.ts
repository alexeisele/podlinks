import { PodlinksPage } from './app.po';

describe('podlinks App', () => {
  let page: PodlinksPage;

  beforeEach(() => {
    page = new PodlinksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
