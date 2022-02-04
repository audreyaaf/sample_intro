/// <reference types ='cypress'/>

describe('types of mouse action', () =>{
    it('Mouse click', () => {
        cy.visit('https://demo.opencart.com')
        cy.get('.form-control').type('phone')
        cy.get('.input-group-btn').trigger('click')
    })
    it.only('Mouse move', () => {
        cy.visit('https://demo.opencart.com')
        cy.get(':nth-child(3) >.dropdown-toggle')
            .invoke('show')
            .should('be.visible')
            .trigger('mouseover')
        cy.get('ul.nav li:nth-child(1) > div')
            .invoke('show')
            .should('be.visible')
        cy.get('ul.nav li:nth-child(1) > div ul li:nth-child(2)').click()
        })
})