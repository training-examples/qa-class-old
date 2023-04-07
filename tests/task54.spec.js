import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://brooklyn-theme.myshopify.com/');

  // Task 54
  // Choose a product category
  // Click a product, select a variant (color, size, etc)
  // Add to cart
  // Verify that it has been added to chart
  // Click checkout
  // Get as far through the checkout process as you can
  // If you get to payment, you can use the Stripe test credit card,
  // and assert that the declined message pops up.
  // Visa: 4242424242424242
  // Expiry: any future date
  // CVV: any three digit number
});
