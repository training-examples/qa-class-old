import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://demo.realworld.io/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://demo.realworld.io/#/login');

  await page.getByPlaceholder('Email').fill('test-user@sstur.com');
  await page.getByPlaceholder('Password').fill('asdfasdf');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://demo.realworld.io/#/');

  // Task 53
  // Keep all the above (because we do need to login before we do the next steps)
  // Add some tests to create an article and post it
  // Then test that it appears on the home feed
});
