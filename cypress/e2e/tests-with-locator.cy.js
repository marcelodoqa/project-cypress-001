/// <reference types="cypress" />

describe ('Testes funcionais com comandos personalizados - Login', () => {
  beforeEach( () => {
      cy.visit('/')   // insert a baseUrl and beforeEach
      cy.title('React App')
  })
});