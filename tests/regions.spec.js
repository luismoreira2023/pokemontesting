// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Kanto region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region kanto').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:RED-BLUEYELLOWGOLD-')).toBeVisible();
});

test('Search Johto region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Johto').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:GOLD-')).toBeVisible();
});

test('Search Hoenn region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Hoenn').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:RUBY-')).toBeVisible();
});

test('Search Sinnoh region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Sinnoh').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:DIAMOND-')).toBeVisible();
});

test('Search Unova region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Unova').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(
    page.getByText('VERSIONS:BLACK-WHITEBLACK-2-WHITE-')
  ).toBeVisible();
});

test('Search Kalos region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Kalos').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:X-Y')).toBeVisible();
});

test('Search Alola region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Alola').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:SUN-MOONULTRA-SUN-')).toBeVisible();
});

test('Search Galar region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Galar').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:SWORD-SHIELDTHE-ISLE')).toBeVisible();
});

test('Search Hisui region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Hisui').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:LEGENDS-ARCEUS')).toBeVisible();
});

test('Search Paldea region', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'REGIONS' }).click();
  await expect(page.getByText('SELECT REGION')).toBeVisible();
  await page.getByLabel('Select the region Paldea').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.locator('#whiteScreen').getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('VERSIONS:SCARLET-VIOLETTHE-')).toBeVisible();
});
