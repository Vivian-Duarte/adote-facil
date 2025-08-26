describe('Fluxo de Autenticação de Usuário', () => {

  it('deve autenticar um usuário com credenciais válidas', () => {
    const email = 'teste-valido@cypress.io';
    const password = 'senhaForte123';

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/users', 
      body: { name: 'Usuario Valido', email: email, password: password },
      failOnStatusCode: false
    });

    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.url().should('not.include', '/login');
    

    cy.get('h1').contains('Animais disponíveis para adoção').should('be.visible');
  });

  it('deve exibir uma mensagem de erro em um alerta com credenciais inválidas', () => {
    cy.visit('/login');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Email ou senha inválidos.');
    });

    cy.get('input[name="email"]').type('emailinvalido@cypress.io');
    cy.get('input[name="password"]').type('senhaincorreta');
    cy.get('button[type="submit"]').click();
  });

});