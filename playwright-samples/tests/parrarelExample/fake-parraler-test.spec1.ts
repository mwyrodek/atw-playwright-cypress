import { test, expect, Page } from '@playwright/test';

test.describe('Fake test 1 for show of parallel', () => {
    test('Simple Test Case for parallel 1', async ({page}) =>{
        await page.goto('');

        await expect(page).toHaveTitle(/Displate/);
    })

    test('Simple Test Case for parallel 2', async ({page}) =>{
        await page.goto('');

        await expect(page).toHaveTitle(/Displate/);
    })

    test('Simple Test Case for parallel 3', async ({page}) =>{
        await page.goto('');

        await expect(page).toHaveTitle(/Displate/);
    })
})
