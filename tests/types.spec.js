// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Normal type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button' , {name: 'NORMAL'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:')).toBeVisible();
  await expect(page.getByText('IMUNITIESGHOST')).toBeVisible();
});

test('Search Fighting type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#2 FIGHTING fighting' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Flying type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#3 FLYING flying' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESGROUND')).toBeVisible();
});

test('Search Poison type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#4 POISON poison' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ground type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#5 GROUND ground' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESELECTRIC')).toBeVisible();
});

test('Search Rock type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#6 ROCK rock' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Bug type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#7 BUG bug' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ghost type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#8 GHOST ghost' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESNORMALFIGHTING')).toBeVisible();
});

test('Search Steel type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#9 STEEL steel' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
  await expect(page.getByText('IMUNITIESPOISON')).toBeVisible();
});

test('Search Fire type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#10 FIRE fire' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Water type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#11 WATER water' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Grass type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#12 GRASS grass' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Electric type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#13 ELECTRIC electric' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Psychic type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#14 PSYCHIC psychic' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Ice type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#15 ICE ice' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Dragon type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#16 DRAGON dragon' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Dark type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#17 DARK dark' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});

test('Search Fairy type', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'TYPES' }).click();
  await expect(page.getByText('SELECT TYPE')).toBeVisible();
  await page.getByRole('button', { name: '#18 FAIRY fairy' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByText('DOUBLE DAMAGEFROM:TO:')).toBeVisible();
});