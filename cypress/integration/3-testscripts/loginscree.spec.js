///<reference types ='cypress'/>
describe('should be login screen', ()=>{
    it('should login page', ()=>{
        cy.visit('http://demo.automationtesting.in/Index.html')
    })
    it('should be login button', ()=>{
        cy.get('.login').click()
    })
    it('should type username and pwd', ()=> {
        cy.get('#email').type('audrey.a@tcs.com')
        cy.get('#passwd').type('xxx')
        cy.get('#submitlogin').click()
    })
})
