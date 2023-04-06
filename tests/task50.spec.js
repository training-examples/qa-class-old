import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://mcy0dn.csb.app/');

  await page.getByLabel('Login').click();

  await expect(page).toHaveURL('https://mcy0dn.csb.app/login');

  await expect(page.getByRole('heading')).toContainText('Login');

  // Task 50
  // Now fill out the login form and submit
  // After successful login, you should be navigated back
  // to the home page.
  // Username: test-user
  // Password: 123
});
