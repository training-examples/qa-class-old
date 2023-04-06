import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://demo.realworld.io/');

  // Task 52
  // Test the login flow using the username and password below:
  // Username: test-user@sstur.com
  // Password: asdfasdf
});
