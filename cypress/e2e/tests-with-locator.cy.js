/// <reference types="cypress" />

import loc from '../support/locator'
import dados from '../support/dados'

describe ('Testes funcionais com locators - Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')   // insert a baseUrl and beforeEach
    })
    it('CT001.1 - Fazer login com dados validos', ()=>{
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

describe('Testes funcionais com comandos personalizados - Conta',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.login(dados.user, dados.senha)
        cy.resetar()

    })
    it('CT002.1 - Inserir uma conta', ()=>{
        cy.menuContas()
        cy.campoContas('Conta CT002.1')
        cy.btnClick()
        cy.apareceMensagem('Conta inserida com sucesso!')
    })
    it('CT002.2 - Alterar nome da conta', ()=>{
        cy.menuContas()
        cy.btnEditarConta('Conta para alterar').click()
        cy.campoContas('CT002').clear()
        cy.campoContas('CT002.2')
        cy.btnClick()
        cy.apareceMensagem('Conta atualizada com sucesso!')
    })
    it('CT002.3 - Inserir conta com mesmo nome', ()=>{
        cy.menuContas()
        cy.campoContas('Conta mesmo nome')
        cy.btnClick()
        cy.apareceMensagem('Error')
    })
    it('CT002.4 - Excluir conta', ()=>{
        cy.menuContas()
        cy.btnExcluirConta('Conta para alterar').click()
        cy.apareceMensagem('Conta excluída com sucesso!')
    })
    it('CT003.1 - Inserir movimentação', ()=>{
        cy.inserirMoviment('descricao CT003', 'interessado', 10)
        cy.apareceMensagem('Movimentação inserida com sucesso!')
    })
    it('CT003.2 - Excluir movimentacao', ()=>{
        cy.excluirMoviment('Movimentacao para exclusao')
        cy.apareceMensagem('Movimentação removida com sucesso!')
    })
    it('CT003.3 - Editar movimentacao', ()=>{
        cy.editarMoviment('Movimentacao para extrato')
        cy.apareceMensagem('Movimentação alterada com sucesso!')
    })
    it('CT004.1 - Fazer logout', ()=>{
        cy.logout()
        cy.apareceMensagem('Até Logo!')
    })
    it('CT004.2 - Fazer reset', ()=>{
        cy.resetar()
        cy.apareceMensagem('Dados resetados com sucesso!')
    })
})