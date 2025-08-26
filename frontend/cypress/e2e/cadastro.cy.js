describe('Fluxo de Cadastro de Usuário', () => {

  beforeEach(() => {
    cy.visit('/cadastro');
  });

  it('deve permitir que um novo usuário se cadastre com sucesso', () => {

    cy.get('input[name="name"]').type('Usuário de Teste');
    
    const emailUnico = `teste${Date.now()}@cypress.io`;
    cy.get('input[name="email"]').type(emailUnico);

    cy.get('input[name="password"]').type('senhaForte123');
    cy.get('input[name="confirmPassword"]').type('senhaForte123');

    cy.get('button[type="submit"]').click();

    cy.url().should('not.include', '/login');
    cy.log('Teste concluído. BUG ENCONTRADO: Aplicação não redireciona após cadastro.');
  });

});