describe("Simple Case",()=>
{
    it("go to page and test", ()=>
    {
        cy.visit("licensed/star-wars")
            .title()
            .should('have.string', "Star Wars")

        cy.contains('Helmets Graffitti')//check if elements exists

    })
})