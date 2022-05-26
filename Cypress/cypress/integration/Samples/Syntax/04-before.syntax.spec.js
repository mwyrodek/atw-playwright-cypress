/*
NOTE - from test perspecitve - those describes have no sense their main goal is to prove case of syntax
 */
describe("Example of before",()=>
{
    let  Homeworld = "";
    let  FistFilm = ""
    // get people
    before(()=> {
        cy.request(`${Cypress.env('apiUrl')}people/2`)
            .then(response => {
                Homeworld = response.body.homeworld
            })
    })

    //get planet
    before(()=> {
        cy.request(Homeworld)
            .then(response => {
                FistFilm = response.body.films[0];

            })
    })

    //get film
    before(()=> {
        cy.request(FistFilm)
            .then(response => {
                expect(response.body.title).to.be.eq("A New Hope")
            })
    })

    it("3 Calls - 3 in before", ()=>
    {
        cy.visit("licensed/star-wars")
            .title()
            .should('have.string', "Star Wars")

        cy.contains('Helmets Graffitti')
    })
})