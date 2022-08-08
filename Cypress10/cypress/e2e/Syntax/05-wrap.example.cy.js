/*
NOTE - from test perspecitve - those describes have no sense their main goal is to prove case of syntax
 */
describe("Example of wrap",()=>
{
    it("wrap", ()=>
    {
        cy.request(`${Cypress.env('apiUrl')}people/2`)
            .then(response => {
                cy.wrap(response.body.homeworld).as("Homeworld")

            })
            
        cy.get("@Homeworld").then(resp => {
            cy.request(resp)
                .then(response => {
                    cy.wrap(response.body.films[0]).as("FirstFilm")

                })
        })
        cy.get("@FirstFilm").then(resp => {
            cy.request(resp)
                .then(response3 => {
                    expect(response3.body.title).to.be.eq("A New Hope")
                })
        })
    })
})