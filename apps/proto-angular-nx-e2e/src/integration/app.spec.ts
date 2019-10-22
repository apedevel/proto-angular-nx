import { getGreeting } from '../support/app.po';

describe('proto-angular-nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to proto-angular-nx!');
  });
});
