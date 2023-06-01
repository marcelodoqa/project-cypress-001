/// <reference types="cypress" />

describe ('Testes funcionais', ()=>{
    it('CT001.1 - Fazer login com dados validos', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('marcelo@mail.com')
        cy.get('[data-test="passwd"]').type('senha123', {logFalse: true})
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Bem vindo,')
    })
    it('CT001.2 - Fazer login com email invalido', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('email@invalido')
        cy.get('[data-test="passwd"]').type('senha123', {logFalse: true})
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Error')
    })
    it('CT001.3 - Fazer login com senha invalida', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('marcelo@mail.com')
        cy.get('[data-test="passwd"]').type('invalid', {logFalse: true})
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Error')
    })
    it('CT001.4 -  Fazer login com campo email e senha vazio', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
           // .and('contain', 'Error')
    })
    it('CT002.1 - Inserir uma conta', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.resetar()
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta CT002.1')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible').and('contain', 'Conta inserida com sucesso!')
        
    })
    it('CT002.2 - Alterar nome da conta', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.resetar()
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .far').click()
        cy.get('[data-test="nome"]').clear().type('Conta CT002.2')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible').and('contain', 'Conta atualizada com sucesso!')
    })
    it('CT002.3 - Inserir conta com mesmo nome', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.resetar()
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .far').click()
        cy.get('[data-test="nome"]').clear().type('Conta mesmo nome')
        cy.get('.btn').click()
        cy.get('.toast-error').should('be.visible').contains('Error')
    })
    it('CT002.4 - Excluir conta', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.resetar()
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .far').click()
        cy.get('.toast-message')
            .should('be.visible').and('contain', 'Conta excluída com sucesso!')
    })
    it('CT003.1 - Inserir movimentação', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.resetar()
        cy.get('[data-test="menu-movimentacao"] > .fas').click()
        cy.get('[data-test="descricao"]').type('CT003.1 descricao')
        cy.get('[data-test="envolvido"]').type('CT003.1 interessado')
        cy.get('[data-test="valor"]').type(1)
        cy.get('[data-test="status"]').click()
        cy.get('.btn-primary').click()
        cy.get('.toast-message')
            .should('be.visible').and('contain', 'Movimentação inserida com sucesso!')
    })
    it('CT003.2 - Excluir movimentacao', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.resetar()
        cy.get('[data-test="menu-extrato"]').click()
        cy.get(':nth-child(1) > .row > .col > [href="#"] > .far').click()
        cy.get('.toast-message')
            .should('be.visible').and('contain', 'Movimentação removida com sucesso!')
    })
    it.only('CT003.3 - Editar movimentacao', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.resetar()
        cy.get('[data-test="menu-extrato"]').click()
        cy.get('#root > div > div > div:nth-child(2) > div.list-group > li:nth-child(1) > div > div.col.col-md-1 > a:nth-child(1) > i').click()
        cy.get('[data-test="tipo-receita"] > .fas').click()
        cy.wait(500)
        cy.get('.btn-primary').click()
        cy.get('.toast-message')
            .should('be.visible').and('contain', 'Movimentação alterada com sucesso!')
    })
    it('CT004.1 - Fazer logout', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/logout"]').click()
        cy.get('.toast-message')
            .should('be.visible').and('contain', 'Até Logo!')
    })
    it('CT004.2 - Fazer reset', ()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('marcelo@mail.com', 'senha123')
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/reset"]').click()
        cy.get('.toast-message')
                .should('be.visible').and('contain', 'Dados resetados com sucesso!')
    })
})