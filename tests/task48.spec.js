import { test, expect } from '@playwright/test';

test('clicking a movie will navigate', async ({ page }) => {
  await page.goto('https://mcy0dn.csb.app/');

  // Task 48
  // Test that clicking on a movie will navigate to the movie details page
});
