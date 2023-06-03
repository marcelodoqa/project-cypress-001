/// <reference types="cypress" />

import loc from '../support/locator'
import dados from '../support/dados'

describe ('Testes funcionais com locators - Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')   // insert a baseUrl and beforeEach
    })
    it.skip('CT001.1 - Fazer login com dados validos', ()=>{
        cy.fixture("login").as('dados')
        cy.get('@dados').then(dados =>{
            cy.get(loc.login.user).type(dados.user)
            cy.get(loc.login.senha).type(dados.senha, {log: false})
            cy.get(loc.login.btnLogin).click()
            cy.get(loc.mensagem).should('be.visible').and('contain', 'Bem vindo')
        })
    })
    it('CT001.2 - Fazer login com email invalido', ()=>{
        cy.login(dados.invalidUser, dados.senha)
        cy.apareceMensagem('Error')
    })
    it('CT001.3 - Fazer login com senha invalida', ()=>{
        cy.login(dados.user, dados.invalidSenha)
        cy.apareceMensagem('Error')
    })
    it('CT001.4 -  Fazer login com campo email e senha vazio', ()=>{
        cy.btnClick()
        cy.apareceMensagem('!')
    })
})
/// <reference types="cypress" />
