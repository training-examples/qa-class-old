import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://brooklyn-theme.myshopify.com/');

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Women' })
    .click();

  await expect(page).toHaveURL(
    'https://brooklyn-theme.myshopify.com/collections/womens',
  );

  await page.getByRole('link', { name: 'Moon Cycle' }).first().click();

  await expect(page).toHaveURL(
    'https://brooklyn-theme.myshopify.com/collections/womens/products/lunar-cirque',
  );

  let sizeLabelM = page
    .locator('fieldset[name="size"]')
    .locator('label[for="ProductSelect-option-size-M"]');

  await expect(sizeLabelM).toHaveCount(1);

  await sizeLabelM.click();

  await page.getByRole('button', { name: 'Add to Cart' }).click();

  let drawer = page.locator('#CartDrawer');

  await expect(drawer).toBeVisible();

  let checkoutButton = page.getByRole('button', { name: 'Check Out' });

  await expect(checkoutButton).toBeVisible();

  await checkoutButton.click();

  // Now we're on the first step of checkout

  await page.getByPlaceholder('Email').fill('me@example.com');
  await page
    .getByLabel('Country/Region')
    .selectOption({ label: 'United States' });
  await page.getByPlaceholder('First name (optional)').fill('First');
  await page.getByPlaceholder('Last name').fill('Last');
  await page.getByPlaceholder('Address').fill('12345 My Street');
  await page.getByPlaceholder('ZIP code').fill('90210');
  await page.getByPlaceholder('City').fill('Culver City');
  await page.getByLabel('State').selectOption({ label: 'California' });

  await page.getByRole('button', { name: 'Continue to shipping' }).click();

  let continueToPayButton = page.getByRole('button', {
    name: 'Continue to payment',
  });
  await expect(continueToPayButton).toBeVisible();
  await continueToPayButton.click();

  // Now to fill the payment info, using a test card from Stripe

  await page
    .frameLocator('iframe[title="Field container for: Card number"]')
    .getByPlaceholder('Card number')
    .fill('4242424242424242');
  await page
    .frameLocator('iframe[title="Field container for: Name on card"]')
    .getByPlaceholder('Name on card')
    .fill('First Last');
  await page
    .frameLocator(
      'iframe[title="Field container for: Expiration date (MM / YY)"]',
    )
    .getByPlaceholder('Expiration date (MM / YY)')
    .fill('12 / 23');
  await page
    .frameLocator('iframe[title="Field container for: Security code"]')
    .getByPlaceholder('Security code')
    .fill('123');

  await page.getByRole('button', { name: 'Pay now' }).click();

  // let errorMessage = page.getByText(
  //   'Your payment details couldn’t be verified. Check your card details and try again.',
  // );

  // await expect(errorMessage).toBeVisible();

  await page.screenshot({ path: 'screenshot.png' });
});
