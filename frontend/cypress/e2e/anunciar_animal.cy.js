
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Minified React error #418')) {
    return false;
  }
  return true;
});

describe('Fluxo de Anunciar um Novo Animal', () => {

  beforeEach(() => {
    cy.login();
    cy.intercept('GET', '/area_logada/meus_animais?*').as('getMeusAnimais');
    cy.visit('/area_logada/disponibilizar_animal');
    cy.wait('@getMeusAnimais');
  });

  it('deve permitir que um usuário logado anuncie um animal com sucesso', () => {
    cy.get('input[name="name"]').should('be.enabled').type('Cypress Dog');

    cy.get('form').find('select').first().select('Cachorro', { force: true });
    cy.get('form').find('select').eq(1).select('Fêmea', { force: true });

    cy.get('input[name="race"]').should('be.enabled').type('Vira-lata');
    cy.get('textarea[name="description"]').should('be.enabled').type('Um pet dócil e amigável.');
    
    cy.get('input[type="file"]').attachFile('dog.jpg');

    cy.get('button[type="submit"]').should('be.enabled').click();

    cy.url().should('include', '/meus_animais');
    cy.contains('Cypress Dog').should('be.visible');
  });

});