import { test, expect } from '@playwright/test';

test('displays movies', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(
    page.getByRole('heading', { name: 'Knock at the Cabin' }),
  ).toBeVisible();

  await expect(
    page.getByText('While vacationing at a remote cabin'),
  ).toBeVisible();

  await expect(page.getByAltText('Knock at the Cabin')).toBeVisible();
});
