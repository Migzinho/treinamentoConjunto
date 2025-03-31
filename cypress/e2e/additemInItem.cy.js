describe('Validar o site Soucedemo', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.viewport(1280, 720)
      cy.intercept('GET', '**/inventory.html').as('loadInventory')
    })
})