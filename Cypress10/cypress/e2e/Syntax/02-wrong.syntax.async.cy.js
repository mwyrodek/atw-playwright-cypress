/*
NOTE - from test perspecitve - those describes have no sense their main goal is to prove case of syntax
 */

describe("Example of not working syntax - async",()=>
{
    //take note to async
    it("wont work", async ()=>
    {
        //await and retrun
        let responsePeople = await cy.request(`${Cypress.env('apiUrl')}people/2`)
        cy.log(responsePeople.body.homeworld)

        let FistFilm = await cy.request(responsePeople.body.homeworld)

        cy.request(FirstFilm.body.films[0])
            .then(response3 => {
                expect(response3.body.title).to.be.eq("A New Hope")
            })
    })
})