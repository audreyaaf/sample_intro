/// <reference types ='cypress'/>
describe('first test group', () =>{
    it('first test case', ()=>{
        expect(true).to.be.equals(true)
    })
    it('sum of two numbers', ()=>{
        expect(11+11).to.be.equals(22)
    })
})
describe('second test group', ()=>{
    it('false should be false', ()=>{
        expect(false).to.be.equals(false)
    })
})