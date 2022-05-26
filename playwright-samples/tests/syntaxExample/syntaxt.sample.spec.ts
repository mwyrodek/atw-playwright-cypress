import { expect } from '@playwright/test';
import { test } from '../../util/configExt'

test.describe('Example of Syntax', () => {
    test('Api call', async ({ request , apiUrl}) => {

        const peopleResponse = await  request.get(`${apiUrl}people/2`)
        const peopleBody = await peopleResponse.json()

        const planetResponse = await request.get(peopleBody.homeworld)
        const planetbody = await planetResponse.json()

        const filmResponse = await  request.get(planetbody.films[0])
        const filmBody = await filmResponse.json()

        //here would go actual test
        await expect(filmBody.title).toEqual("A New Hope")


    })
})