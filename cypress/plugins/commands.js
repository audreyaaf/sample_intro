Cypress.Commands.add('login', (username, password)=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    
    cy.get('#username').type(username)
    cy.get('#password').type(password)//

    cy.get('#passwd').type(password, {sensitive:true}, {delay:10})
    cy.get('.radius').click()

})