// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Gengar', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
});