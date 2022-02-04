///<reference types='cypress'/>
describe('Sample on Xpath', ()=>{
    it('xpath locator', ()=> {
    cy.visit('http://the-internet.herokuapp.com/login')
    cy.xpath("//input[@id='username']").type('tomsmith')
    cy.xpath("//input[@id='password']").type('audrey')

    })

})