// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Normal type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'NORMAL' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of normal type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:')).toBeVisible();
  await expect(page.getByText('IMUNITIESGHOST')).toBeVisible();
});

test('Search Fighting type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'FIGHTING' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Select the type fighting')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Flying type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'FLYING' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of flying type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESGROUND')).toBeVisible();
});

test('Search Poison type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'POISON' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of poison type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ground type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'GROUND' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of ground type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESELECTRIC')).toBeVisible();
});

test('Search Rock type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'ROCK' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of rock type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Bug type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'BUG' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of bug type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ghost type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'GHOST' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of ghost type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESNORMALFIGHTING')).toBeVisible();
});

test('Search Steel type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'STEEL' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of steel type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESPOISON')).toBeVisible();
});

test('Search Fire type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'FIRE' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of fire type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Water type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'WATER' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of water type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Grass type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'GRASS' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of grass type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Electric type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'ELECTRIC' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of electric type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Psychic type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'PSYCHIC' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of psychic type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ice type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'ICE' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of ice type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Dragon type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'DRAGON' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of dragon type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Dark type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'DARK' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of dark type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Fairy type', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: 'FAIRY' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Image of fairy type')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});
