import { test, expect, Page } from '@playwright/test';

test.describe('Simple test', () => {
    test('Showing Syntax @Smoke', async ({page}) =>{
        await page.goto('/licensed/star-wars');

        await expect(page, "the tittle was wrong").toHaveTitle(/Stssssar Wars/);

        await expect(page.locator('text=Helmets Graffitti')
            .first())
            .toBeVisible();
    })
})