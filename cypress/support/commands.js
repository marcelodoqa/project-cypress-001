Cypress.Commands.add('login', ()=>{
        cy.get('[data-test="email"]').type('marcelo@mail.com')
        cy.get('[data-test="passwd"]').type('senha123', {logFalse: true})
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Bem vindo,')
})

Cypress.Commands.add('resetar', ()=>{
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/reset"]').click()
    cy.get('.toast-message')
            .should('be.visible').and('contain', 'Dados resetados com sucesso!')
})