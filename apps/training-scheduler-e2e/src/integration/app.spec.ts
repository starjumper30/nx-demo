import { getGreeting } from '../support/app.po';

describe('training-scheduler', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to training-scheduler!');
  });
});
