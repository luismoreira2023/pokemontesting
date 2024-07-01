// @ts-check
const { test, expect } = require('@playwright/test');



test('Search Gengar', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Gengar');
  await page.getByLabel('Select the pokemon Gengar').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of gengar')).toBeVisible();
});

test('Search Omanyte', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Omanyte');
  await page.getByLabel('Select the pokemon Omanyte').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Omanyte')).toBeVisible();
});

test('Search Kabuto', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Kabuto');
  await page.getByLabel('Select the pokemon kabuto', { exact: true }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Kabuto')).toBeVisible();
});

test('Search Aerodactyl', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Aerodactyl');
  await page.getByLabel('Select the pokemon Aerodactyl').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Aerodactyl')).toBeVisible();
});

test('Search Lileep', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Lileep');
  await page.getByLabel('Select the pokemon Lileep').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Lileep')).toBeVisible();
});

test('Search Anorith', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Anorith');
  await page.getByLabel('Select the pokemon Anorith').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Anorith')).toBeVisible();
});

test('Search Cranidos', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Cranidos');
  await page.getByLabel('Select the pokemon Cranidos').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Cranidos')).toBeVisible();
});

test('Search Shieldon', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Shieldon');
  await page.getByLabel('Select the pokemon Shieldon').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Shieldon')).toBeVisible();
});

test('Search Tirtouga', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Tirtouga');
  await page.getByLabel('Select the pokemon Tirtouga').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Tirtouga')).toBeVisible();
});

test('Search Archen', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Archen');
  await page.getByLabel('Select the pokemon Archen').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Archen')).toBeVisible();
});

test('Search Tyrunt', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Tyrunt');
  await page.getByLabel('Select the pokemon Tyrunt').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Tyrunt')).toBeVisible();
});

test('Search Amaura', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Amaura');
  await page.getByLabel('Select the pokemon Amaura').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Amaura')).toBeVisible();
});

test('Search Dracozolt', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Dracozolt');
  await page.getByLabel('Select the pokemon Dracozolt').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Dracozolt')).toBeVisible();
});

test('Search Arctozolt', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Arctozolt');
  await page.getByLabel('Select the pokemon Arctozolt').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Arctozolt')).toBeVisible();
});

test('Search Dracovish', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Dracovish');
  await page.getByLabel('Select the pokemon Dracovish').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Dracovish')).toBeVisible();
});

test('Search Arctovish', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Arctovish');
  await page.getByLabel('Select the pokemon Arctovish').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Arctovish')).toBeVisible();
});

test('Search Misdreavus', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Misdreavus');
  await page.getByLabel('Select the pokemon Misdreavus').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Misdreavus')).toBeVisible();
});

test('Search Duskull', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Duskull');
  await page.getByLabel('Select the pokemon Duskull').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Duskull')).toBeVisible();
});

test('Search Drifblim', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Drifblim');
  await page.getByLabel('Select the pokemon Drifblim').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Drifblim')).toBeVisible();
});

test('Search Chandelure', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Chandelure');
  await page.getByLabel('Select the pokemon Chandelure').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Chandelure')).toBeVisible();
});

test('Search Trevenant', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Trevenant');
  await page.getByLabel('Select the pokemon Trevenant').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Trevenant')).toBeVisible();
});

test('Search Sandygast', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Sandygast');
  await page.getByLabel('Select the pokemon Sandygast').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Sandygast')).toBeVisible();
});

test('Search Runerigus', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Runerigus');
  await page.getByLabel('Select the pokemon Runerigus').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Runerigus')).toBeVisible();
});

test('Search Houndstone', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Houndstone');
  await page.getByLabel('Select the pokemon Houndstone').click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByLabel('Open image of Houndstone')).toBeVisible();
});
