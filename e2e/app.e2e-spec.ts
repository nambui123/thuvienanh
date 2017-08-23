import { ImageStudioPage } from './app.po';

describe('image-studio App', () => {
  let page: ImageStudioPage;

  beforeEach(() => {
    page = new ImageStudioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
