import { test, expect } from '@playwright/test';

test('can navigate to login', async ({ page }) => {
  await page.goto('https://demo.realworld.io/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://demo.realworld.io/#/login');

  await page.getByPlaceholder('Email').fill('test-user@sstur.com');
  await page.getByPlaceholder('Password').fill('asdfasdf');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://demo.realworld.io/#/');

  await page.getByRole('link', { name: 'New Article' }).click();

  await expect(page).toHaveURL('https://demo.realworld.io/#/editor/');

  let articleTitle = `Test Article ${Date.now()}`;

  await page.getByPlaceholder('Article Title').fill(articleTitle);
  await page.getByPlaceholder(`What's this article about?`).fill('QA Testing');
  await page
    .getByPlaceholder(`Write your article (in markdown)`)
    .fill(
      `QA (Quality Assurance) testing is an essential process in software development that aims to ensure that software products meet the expected quality standards. QA testing involves a range of activities, including functional testing, performance testing, security testing, and usability testing, among others.`,
    );
  await page.getByRole('button', { name: 'Publish Article' }).click();

  await expect(page.getByRole('heading', { name: articleTitle })).toBeVisible();

  await page.getByRole('button', { name: 'Delete Article' }).click();

  await expect(page).toHaveURL('https://demo.realworld.io/#/');
});
