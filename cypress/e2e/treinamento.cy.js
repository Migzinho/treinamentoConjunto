describe('Validar o site Soucedemo', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.viewport(1280, 720)
      cy.intercept('GET', '**/inventory.html').as('loadInventory')
    })
    it('Deve acessar a página inicial e verificar o botão login', () => {
        cy.get('[data-test="login-button"]').should('be.visible')
    })
    it('Deve logar na página com login: standard_user', () => {
        cy.get('input[placeholder="Username"]').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.app_logo').should('contain', 'Swag Labs')
     })
    it('Deve logar na página com login: locked_out_user', () => {
        cy.get('input[placeholder="Username"]').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-message-container').should('contain', 'Epic sadface: Sorry, this user has been locked out.').and('be.visible')
     })
})