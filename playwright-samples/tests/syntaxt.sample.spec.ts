import { test, expect } from '@playwright/test';

test.describe('Example of Syntax', () => {
    test('ssample', async ({ request }) => {

        const peopleResponse = await  request.get("people/2")
        const peopleBody = await peopleResponse.json()
        console.log(peopleBody.homeworld)

        const planetResponse = await  request.get(peopleBody.homeworld)
        const planetbody = await planetResponse.json()
        console.log(planetbody.films[0])

        const filmResponse = await  request.get(planetbody.films[0])
        const filmBody = await filmResponse.json()
        await expect(filmBody.title).toEqual("A New Hope")
    })
})