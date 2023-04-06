import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/');

  let newTaskInput = page.getByPlaceholder('What needs to be done?');

  await newTaskInput.fill('Do Laundry');
  await newTaskInput.press('Enter');

  await expect(newTaskInput).toBeEmpty();

  await newTaskInput.fill('Make coffee');
  await newTaskInput.press('Enter');

  await expect(newTaskInput).toBeEmpty();

  // I'll put this locator in a variable since we'll use it several times below
  let listItem = page.getByRole('listitem').filter({ hasText: 'Do Laundry' });

  await expect(listItem).toBeVisible();

  // We can't use getByLabel because the label doesn't have a "for" attribute,
  // so we're using getByRole
  await listItem.getByRole('checkbox').click();

  await expect(listItem.getByRole('checkbox')).toBeChecked();

  // Since we can't get the button by its aria-label, we're instead assuming
  // that this is the only button in the list item.
  await listItem.getByRole('button').click();

  await expect(listItem).toHaveCount(0);
});
