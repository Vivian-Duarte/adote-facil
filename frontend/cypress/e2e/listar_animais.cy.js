describe('Fluxo de Listar Animais Disponíveis', () => {
  
  beforeEach(() => {
    cy.login(); 
    cy.intercept('GET', '/area_logada/animais_disponiveis*').as('getAvailableAnimals');
    cy.visit('/');
    cy.wait('@getAvailableAnimals');
  });

  it('deve exibir uma lista de animais ao carregar a página inicial', () => {

    cy.get('.dWIhkM', { timeout: 10000 }).should('have.length.greaterThan', 0);
  });

});