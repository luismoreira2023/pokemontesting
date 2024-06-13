// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Bulbasaur', async ({ page }) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByRole('button', { name: 'POKÉMON' })).toBeVisible();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible();
  await page.getByRole('button', { name: 'BULBASAUR' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^GRASS$/ }).first()).toHaveText("GRASS");
  await expect(page.locator('div').filter({ hasText: /^POISON$/ }).first()).toHaveText("POISON");
  await expect(page.getByText('A strange seed was planted on')).toHaveText("A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.");
});
