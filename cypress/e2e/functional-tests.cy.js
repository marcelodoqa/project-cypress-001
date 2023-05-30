/// <reference types="cypress" />


describe ('Testes funcionais', ()=>{
    it('Cenario: Fazer login com dados validos', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('marcelo@mail.com')
        cy.get('[data-test="passwd"]').type('senha123', {logFalse: true})
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Bem vindo,')
    })
    it('Cenario: Fazer login com email invalido', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('email@invalido')
        cy.get('[data-test="passwd"]').type('senha123', {logFalse: true})
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Error')
    })
    it('Cenario: Fazer login com senha invalida', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('marcelo@mail.com')
        cy.get('[data-test="passwd"]').type('invalid', {logFalse: true})
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Error')
    })
    it('Cenario: Fazer login com campo email e senha vazio', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
           // .and('contain', 'Error')
    })
})