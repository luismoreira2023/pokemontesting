// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Gengar', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Gengar');
  await page.getByRole('button', { name: '#94 GENGAR ghostpoison' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Omanyte', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Omanyte');
  await page.getByRole('button', { name: '#138 OMANYTE rockwater' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Kabuto', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Kabuto');
  await page.getByRole('button', { name: '#140 KABUTO rockwater' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Aerodactyl', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Aerodactyl');
  await page.getByRole('button', { name: '#142 AERODACTYL rockflying' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Lileep', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Lileep');
  await page.getByRole('button', { name: '#345 LILEEP rockgrass' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Anorith', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Anorith');
  await page.getByRole('button', { name: '#347 ANORITH rockbug' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Cranidos', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Cranidos');
  await page.getByRole('button', { name: '#408 CRANIDOS rock' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Shieldon', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Shieldon');
  await page.getByRole('button', { name: '#410 SHIELDON rocksteel' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Tirtouga', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Tirtouga');
  await page.getByRole('button', { name: '#564 TIRTOUGA waterrock' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Archen', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Archen');
  await page.getByRole('button', { name: '#566 ARCHEN rockflying' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Tyrunt', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Tyrunt');
  await page.getByRole('button', { name: '#696 TYRUNT rockdragon' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Amaura', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Amaura');
  await page.getByRole('button', { name: '#698 AMAURA rockice' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Dracozolt', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Dracozolt');
  await page.getByRole('button', { name: '#880 DRACOZOLT electricdragon' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Arctozolt', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Arctozolt');
  await page.getByRole('button', { name: '#881 ARCTOZOLT electricice' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Dracovish', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Dracovish');
  await page.getByRole('button', { name: '#882 DRACOVISH waterdragon' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Arctovish', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Arctovish');
  await page.getByRole('button', { name: '#883 ARCTOVISH waterice' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Misdreavus', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Misdreavus');
  await page.getByRole('button', { name: '#200 MISDREAVUS ghost' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Duskull', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Duskull');
  await page.getByRole('button', { name: '#355 DUSKULL ghost' }).click();
  await page.getByRole('button', { name: 'PHOTO' });
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Drifblim', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Drifblim');
  await page.getByRole('button', { name: '#426 DRIFBLIM ghostflying' }).click();
  await page.getByRole('button', { name: 'PHOTO' });
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Chandelure', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Chandelure');
  await page.getByRole('button', { name: '#609 CHANDELURE ghostfire' }).click();
  await page.getByRole('button', { name: 'PHOTO' });
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Trevenant', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Trevenant');
  await page.getByRole('button', { name: '#709 TREVENANT ghostgrass' }).click();
  await page.getByRole('button', { name: 'PHOTO' });
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Sandygast', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Sandygast');
  await page.getByRole('button', { name: '#769 SANDYGAST ghostground' }).click();
  await page.getByRole('button', { name: 'PHOTO' });
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Runerigus', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Runerigus');
  await page.getByRole('button', { name: '#867 RUNERIGUS groundghost' }).click();
  await page.getByRole('button', { name: 'PHOTO' });
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});

test('Search Houndstone', async ({page}) => {
  await page.setViewportSize({width: 1600, height: 900});
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByPlaceholder('Search pokémon...')).toBeVisible();
  await page.getByPlaceholder('Search pokémon...').fill('Houndstone');
  await page.getByRole('button', { name: '#972 HOUNDSTONE ghost' }).click();
  await page.getByRole('button', { name: 'PHOTO' });
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
});