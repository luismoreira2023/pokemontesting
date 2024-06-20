// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Gengar', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
});
