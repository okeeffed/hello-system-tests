/// <reference types="cypress" />

const options = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays the correct value as it is clicked', () => {
    for (let i = 0; i < 5; i++) {
      // https://on.cypress.io/blur
      options.forEach(option => {
        cy.findByRole('button', { name: option }).click();
        cy.findByText(option.toUpperCase()).should('exist');
      });
    }
  });
});
