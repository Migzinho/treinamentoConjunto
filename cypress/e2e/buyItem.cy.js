describe('Validar a compra de um item', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.viewport(1280, 720)
      cy.intercept('GET', '**/inventory.html').as('loadInventory')
    })
    
    it('Deve comprar um item', () => {
        cy.get('input[placeholder="Username"]').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.app_logo').should('contain', 'Swag Labs')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').should('be.visible').click()
        cy.get('[data-test="checkout"]').should('be.visible').click()
        cy.get('[data-test="firstName"]').should('be.visible').type('Jose da Silva')
        cy.get('[data-test="lastName"]').should('be.visible').type('Santos')
        cy.get('[data-test="postalCode"]').should('be.visible').type('12345678')
        cy.get('[data-test="continue"]').should('be.visible').click()
        cy.get('[data-test="finish"]').should('be.visible').click()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    })
})