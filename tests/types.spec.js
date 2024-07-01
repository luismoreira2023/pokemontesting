// @ts-check
const { test, expect } = require('@playwright/test');

const selectType = async (page, type) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('TYPES Button').click();
  await expect(page.getByLabel('Select Type')).toBeVisible();
  await page.getByLabel('Select the type ' + type).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of ' + type + ' type')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
};

test('Search Normal type', async ({ page }) => {
  await selectType(page, 'normal');
  await expect(page.getByText('DOUBLE DAMAGEFROM:')).toBeVisible();
  await expect(page.getByLabel('Immune to ghost')).toBeVisible();
});

test('Search Fighting type', async ({ page }) => {
  await selectType(page, 'fighting');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Flying type', async ({ page }) => {
  await selectType(page, 'flying');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByLabel('Immune to ground')).toBeVisible();
});

test('Search Poison type', async ({ page }) => {
  await selectType(page, 'poison');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ground type', async ({ page }) => {
  await selectType(page, 'ground');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByLabel('Immune to electric')).toBeVisible();
});

test('Search Rock type', async ({ page }) => {
  await selectType(page, 'rock');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Bug type', async ({ page }) => {
  await selectType(page, 'bug');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ghost type', async ({ page }) => {
  await selectType(page, 'ghost');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByLabel('Immune to normal')).toBeVisible();
  await expect(page.getByLabel('Immune to fighting')).toBeVisible();
});

test('Search Steel type', async ({ page }) => {
  await selectType(page, 'steel');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByLabel('Immune to poison')).toBeVisible();
});

test('Search Fire type', async ({ page }) => {
  await selectType(page, 'fire');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Water type', async ({ page }) => {
  await selectType(page, 'water');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Grass type', async ({ page }) => {
  await selectType(page, 'grass');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Electric type', async ({ page }) => {
  await selectType(page, 'electric');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Psychic type', async ({ page }) => {
  await selectType(page, 'psychic');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ice type', async ({ page }) => {
  await selectType(page, 'ice');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Dragon type', async ({ page }) => {
  await selectType(page, 'dragon');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Dark type', async ({ page }) => {
  await selectType(page, 'dark');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByLabel('Immune to psychic')).toBeVisible();
});

test('Search Fairy type', async ({ page }) => {
  await selectType(page, 'fairy');
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByLabel('Immune to dragon')).toBeVisible();
});
