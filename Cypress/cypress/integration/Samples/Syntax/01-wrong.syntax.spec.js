/*
NOTE - from test perspecitve - those describes have no sense their main goal is to prove case of syntax
 */

describe("Example of not working syntax",()=>
{
    let Homeworld = "";
    let FirstFilm = ""


    it("won't work", ()=>
    {

        cy.request(`${Cypress.env('apiUrl')}people/2`)
            .then(response => {
                Homeworld = response.body.homeworld

            })

        cy.request(Homeworld)
            .then(response => {
                FirstFilm = response.body.films[0];

            })

        cy.request(FirstFilm)
            .then(response => {
                expect(response.body.title).to.be.eq("A New Hope")

            })
        cy.log(Homeworld)
        //Actual test here
    })
})