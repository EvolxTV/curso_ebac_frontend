/// <reference types="cypress" />

describe("Testes para homepage", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
    cy.clearAllCookies();
  });

  it("Deve incluir informacoes no formulario corretamente", () => {
    cy.get("input[type='text'").type("Sezimar Junior");
    cy.get("input[type='email'").type("sezimar@teste.com");
    cy.get("input[type='tel'").type("84994439178");
    cy.screenshot("Informação de conntato");
    cy.get(".adicionar").click();
    cy.screenshot("Contato adicionado");
  });
  it("Deve alterar informação de um contato", () => {
    cy.get(".contato > .sc-gueYoa > .edit").last().click();
    cy.get('input[type="text"]').clear().type("Marcelo Souza");
    cy.get('input[type="email"]').clear().type("mmarcelo@ebac.com.br");
    cy.get('input[type="tel"]').clear().type("11912345678");
    cy.screenshot("Informacoes alteradas");
    cy.get(".alterar").click();
    cy.screenshot("Contato alterado");
  });
  it("Deve excluir um contato", () => {
    cy.get(".contato > .sc-gueYoa > .delete").last().click();
    cy.screenshot("Contato excluido");
  });
});
