
Cypress.Commands.add('login', (email, senha)=>{
        cy.get('[data-test="email"]').type(email)
        cy.get('[data-test="passwd"]').type(senha, {logFalse: true})
        cy.get('.btn').click()
})

Cypress.Commands.add('resetar', () => {
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/reset"]').click()
    cy.get('.toast-message')
      .should('be.visible')
      .and('contain', 'Dados resetados com sucesso!')
})

Cypress.Commands.add('apareceMensagem', (msg) => {
    cy.get('.toast-message')
            .should('be.visible')
            .and('contain', msg)
})

Cypress.Commands.add('menuContas', () => {
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()
})

Cypress.Commands.add('campoContas', (novaConta) => {
    cy.get('[data-test="nome"]').type(novaConta)
})

Cypress.Commands.add('btnEditarConta', (contaNome) => {
    cy.xpath(`//table//td[contains(.,'${contaNome}')]/..//i[@class='far fa-edit']`)
})


Cypress.Commands.add('btnExcluirConta', (contaNome) => {
    cy.xpath(`//table//td[contains(.,'${contaNome}')]/..//i[@class='far fa-trash-alt']`)
})

Cypress.Commands.add('inserirMoviment', (desc, inter, value) => {
    cy.get('[data-test="menu-movimentacao"] > .fas').click()
        cy.get('[data-test="descricao"]').type(desc)
        cy.get('[data-test="envolvido"]').type(inter)
        cy.get('[data-test="valor"]').type(value)
        cy.get('[data-test="status"]').click()
        cy.get('.btn-primary').click()
})

Cypress.Commands.add('excluirMoviment',(contaNome) => {
    cy.get('[data-test="menu-extrato"]').click()
    cy.xpath(`//div[@class='list-group']//li//div//div[1]//span[text()='${contaNome}']/../../../div[2]//a[2]`).click()
})

Cypress.Commands.add('editarMoviment',(contaNome) => {
    cy.get('[data-test="menu-extrato"]').click()
    cy.xpath(`//div[@class='list-group']//li//div//div[1]//span[text()='${contaNome}']/../../../div[2]//a[1]`).click()
    cy.get('[data-test="tipo-receita"] > .fas').click()
    cy.wait(500)
    cy.get('.btn-primary').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/logout"]').click()
})

