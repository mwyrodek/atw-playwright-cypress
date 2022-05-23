describe("Example of not working syntax",()=>
{
    let Homeworld = "";
    let FistFilm = ""


    it("wont work", ()=>
    {
        cy.request("people/2")
            .then(response => {
                Homeworld = response.body.homeworld

            })

        cy.request(Homeworld)
            .then(response => {
                FistFilm = response.body.films[0];

            })

        cy.request(FistFilm)
            .then(response3 => {
                expect(response3.body.title).to.be.eq("A New Hope")
            })
    })
})

describe("Example of not working syntax - async",()=>
{
    it("wont work", async ()=>
    {
        let Homeworld = await cy.request("people/2")
            .then(response => {
                return response.body.homeworld

            })

        let FistFilm = await cy.request(Homeworld)
            .then(response => {
                return response.body.films[0];

            })

        cy.request(FistFilm)
            .then(response3 => {
                expect(response3.body.title).to.be.eq("A New Hope")
            })
    })
})

describe("Example of simple Synatax",()=>
{
    it("3 Call Then", ()=>
    {
        cy.request("people/2")
            .then(response => {
                var homeworld = response.body.homeworld

                cy.request(homeworld)
                    .then(response2 => {

                        var first_film = response2.body.films[0];

                        cy.request(first_film)
                            .then(response3 => {
                                expect(response3.body.title).to.be.eq("A New Hope")
                            })

                    })

            })
    })
})

describe("Example of before",()=>
{
    let  Homeworld = "";
    let  FistFilm = ""
    //get homewold
    before(()=> {
        cy.request("people/2")
            .then(response => {
                Homeworld = response.body.homeworld

            })
    })

    //get film
    before(()=> {
        cy.request(Homeworld)
            .then(response => {
                FistFilm = response.body.films[0];

            })
    })

    it("3 Calls - 2 in before", ()=>
    {
        cy.request(FistFilm)
            .then(response => {
                expect(response.body.title).to.be.eq("A New Hope")
            })
    })
})

describe("Example of wrap",()=>
{

    it("wont work", ()=>
    {
        cy.request("people/2")
            .then(response => {
                cy.wrap(response.body.homeworld).as("Homeworld")

            })
        cy.log("@Homeworld")
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