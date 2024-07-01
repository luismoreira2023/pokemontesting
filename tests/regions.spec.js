// @ts-check
const { test, expect } = require('@playwright/test');

const selectRegion = async (page, region) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('Select Region')).toBeVisible();
  await page.getByLabel('Select the region '+ region).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of '+ region + ' region')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
};

test('Search Kanto region', async ({ page }) => {
  await selectRegion(page, 'kanto');
  await expect(page.getByText('VERSIONS:RED-BLUEYELLOWGOLD-')).toBeVisible();
});

test('Search Johto region', async ({ page }) => {
  await selectRegion(page, 'johto');
  await expect(page.getByText('VERSIONS:GOLD-')).toBeVisible();
});

test('Search Hoenn region', async ({ page }) => {
  await selectRegion(page, 'hoenn');
  await expect(page.getByText('VERSIONS:RUBY-')).toBeVisible();
});

test('Search Sinnoh region', async ({ page }) => {
  await selectRegion(page, 'sinnoh');
  await expect(page.getByText('VERSIONS:DIAMOND-')).toBeVisible();
});

test('Search Unova region', async ({ page }) => {
  await selectRegion(page, 'unova');
  await expect(
    page.getByText('VERSIONS:BLACK-WHITEBLACK-2-WHITE-')
  ).toBeVisible();
});

test('Search Kalos region', async ({ page }) => {
  await selectRegion(page, 'kalos');
  await expect(page.getByText('VERSIONS:X-Y')).toBeVisible();
});

test('Search Alola region', async ({ page }) => {
  await selectRegion(page, 'alola');
  await expect(page.getByText('VERSIONS:SUN-MOONULTRA-SUN-')).toBeVisible();
});

test('Search Galar region', async ({ page }) => {
  await selectRegion(page, 'galar');
  await expect(page.getByText('VERSIONS:SWORD-SHIELDTHE-ISLE')).toBeVisible();
});

test('Search Hisui region', async ({ page }) => {
  await selectRegion(page, 'hisui');
  await expect(page.getByText('VERSIONS:LEGENDS-ARCEUS')).toBeVisible();
});

test('Search Paldea region', async ({ page }) => {
  await selectRegion(page, 'paldea');
  await expect(page.getByText('VERSIONS:SCARLET-VIOLETTHE-')).toBeVisible();
});
