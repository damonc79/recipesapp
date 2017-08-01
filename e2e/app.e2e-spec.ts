import { RecipesappPage } from './app.po';

describe('recipesapp App', () => {
  let page: RecipesappPage;

  beforeEach(() => {
    page = new RecipesappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
