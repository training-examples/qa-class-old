import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/');

  // Task 51
  // Write tests for the example web app. It’s a to do list app.
  // We’ll want to test adding item(s), marking an item as done
  // and deleting an item.
});
