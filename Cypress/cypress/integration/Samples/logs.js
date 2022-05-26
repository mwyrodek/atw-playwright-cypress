describe('Example of issus of cypress log', ()=>{
    it('Example of logs', () => {
        cy.visit("https://displate.com")

        cy.log("YOU will only see me in browser or video")

        console.log("and me only in browser when you visit console")

    })
})