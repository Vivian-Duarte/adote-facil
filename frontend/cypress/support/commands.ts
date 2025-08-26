/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('login', (
  email = 'teste@cypress.io',
  password = 'senhaForte123') => {
  
  cy.session([email, password], () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/users', 
      body: { name: 'Usuario Teste Login', email, password },
      failOnStatusCode: false
    });

    cy.intercept('GET', '/area_logada/animais_disponiveis*').as('getAnimals');

    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.wait('@getAnimals');
  });
});

export {}