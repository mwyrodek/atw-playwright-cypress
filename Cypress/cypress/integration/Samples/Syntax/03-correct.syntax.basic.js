/*
NOTE - from test perspecitve - those describes have no sense their main goal is to prove case of syntax
 */

describe("Example of simple Synatax",()=>
{
    it("3 Call Then", ()=>
    {
        cy.request(`${Cypress.env('apiUrl')}people/2`)
            .then(response => {
                var homeworld = response.body.homeworld

                cy.request(homeworld)
                    .then(response => {

                        var first_film = response.body.films[0];

                        cy.request(first_film)
                            .then(response3 => {
                                expect(response3.body.title).to.be.eq("A New Hope")
                                //here would go actual test
                            })

                    })

            })
    })
})