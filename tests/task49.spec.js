import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://mcy0dn.csb.app/');

  await page.getByLabel('Login').click();

  await expect(page).toHaveURL('https://mcy0dn.csb.app/login');

  await expect(page.getByRole('heading')).toContainText('Login');
});
