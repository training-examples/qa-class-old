import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kidthingz.myshopify.com/');

  await page.getByRole('link', { name: 'Catalog' }).click();

  await page.getByTitle('Kid Shred Set').click();

  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.getByRole('button', { name: 'Continue shopping' }).click();

  await page.getByTitle('Sweater Set').click();

  await page.getByRole('combobox', { name: 'Size' }).selectOption('L');

  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.getByRole('button', { name: 'View cart' }).click();

  await expect(page.getByRole('cell', { name: 'Price' })).toBeVisible();

  await expect(page.getByRole('cell', { name: 'Total' })).toBeVisible();

  await page
    .getByLabel('Special instructions for seller')
    .fill('Please send most comfy sweater');

  await page.getByRole('button', { name: 'Check Out' }).click();

  await expect(page.getByPlaceholder('Email')).toBeVisible();

  await page.getByPlaceholder('Email').fill('test-user@example.com');

  await page.getByPlaceholder('First name (optional)').fill('First name');

  await page.getByPlaceholder('Last name').fill('Last name');

  await page.getByPlaceholder('Address').fill('12345 My Street');

  await page.getByPlaceholder('ZIP code').fill('90210');

  await page.getByPlaceholder('City').fill('Culver City');

  await page.getByLabel('State').selectOption({ label: 'California' });

  await page.getByRole('button', { name: 'Continue to shipping' }).click();

  await expect(
    page.getByRole('heading', { name: 'Shipping method' }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'Continue to payment' }).click();

  await page
    .locator('div')
    .filter({ hasText: /^Cash on Delivery \(COD\)$/ })
    .nth(3)
    .click();

  await page.getByRole('button', { name: 'Complete order' }).click();

  await expect(
    page.getByRole('heading', { name: 'Your order is confirmed' }),
  ).toBeVisible();
});
