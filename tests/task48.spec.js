import { test, expect } from '@playwright/test';

test('clicking a movie will navigate', async ({ page }) => {
  await page.goto('https://mcy0dn.csb.app/');

  await page
    .getByRole('heading', { name: 'Puss in Boots: The Last Wish' })
    .click();

  await expect(page).toHaveURL('https://mcy0dn.csb.app/movies/315162');

  await expect(
    page.getByRole('heading', { name: 'Movie Details' }),
  ).toBeVisible();
});
