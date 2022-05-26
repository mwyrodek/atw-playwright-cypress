
describe("Fake File  2 for CI Simulation",()=>
{
    it("Fake Case 1", ()=>
    {
        cy.visit("")
            .title()
            .should('have.string', "Displate")
    })

    it("Fake Case 2", ()=>
    {
        cy.visit("")
            .title()
            .should('have.string', "Displate")
    })

    it("Fake Case 3", ()=>
    {
        cy.visit("")
            .title()
            .should('have.string', "Displate")
    })
})