// @ts-nocheck
const { test, expect } = require('@playwright/test');

const selectPokemon = async (page, pokemon) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon ' + pokemon).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of ' + pokemon)).toBeVisible();
  await page.getByLabel('Switch to Info').click();
};


test.describe.skip('Paradoxal', ()=>{
  test('Search Great Tusk', async ({page}) => {
    await selectPokemon (page, 'great-tusk');
    await expect(page.getByLabel('GROUND')).toHaveText('GROUND');
    await expect(page.getByLabel('FIGHTING')).toHaveText('FIGHTING');
  });
  
  test('Search Scream Tail', async ({page}) => {
    await selectPokemon (page, 'scream-tail');
    await expect(page.getByLabel('FAIRY', { exact: true })).toHaveText('FAIRY');
    await expect(page.getByLabel('PSYCHIC')).toHaveText('PSYCHIC');
  });
  
  test('Search Brute Bonnet', async ({page}) => {
    await selectPokemon (page, 'brute-bonnet');
    await expect(page.getByLabel('GRASS')).toHaveText('GRASS');
    await expect(page.getByLabel('DARK', { exact: true })).toHaveText('DARK');
  });
  
  test('Search Flutter Mane', async ({page}) => {
    await selectPokemon (page, 'flutter-mane');
    await expect(page.getByLabel('GHOST')).toHaveText('GHOST');
    await expect(page.getByLabel('FAIRY', { exact: true })).toHaveText('FAIRY');
  });
  
  test('Search Slither Wing', async ({page}) => {
    await selectPokemon (page, 'slither-wing');
    await expect(page.getByLabel('BUG', { exact: true })).toHaveText('BUG');
    await expect(page.getByLabel('FIGHTING')).toHaveText('FIGHTING');
  });
  
  test('Search Sandy Shocks', async ({page}) => {
    await selectPokemon (page, 'sandy-');
    await expect(page.getByLabel('ELECTRIC')).toHaveText('ELECTRIC');
    await expect(page.getByLabel('GROUND')).toHaveText('GROUND');
  });
  
  test('Search Iron Treads', async ({page}) => {
    await selectPokemon (page, 'iron-treads');
    await expect(page.getByLabel('GROUND')).toHaveText('GROUND');
    await expect(page.getByLabel('STEEL', { exact: true })).toHaveText('STEEL');
  });
  
  test('Search Iron Bundle', async ({page}) => {
    await selectPokemon (page, 'iron-bundle');
    await expect(page.getByLabel('ICE', { exact: true })).toHaveText('ICE');
    await expect(page.getByLabel('WATER')).toHaveText('WATER');
  });
  
  test('Search Iron Hands', async ({page}) => {
    await selectPokemon (page, 'iron-hands');
    await expect(page.getByLabel('FIGHTING')).toHaveText('FIGHTING');
    await expect(page.getByLabel('ELECTRIC')).toHaveText('ELECTRIC');
  });
  
  test('Search Iron Jugulis', async ({page}) => {
    await selectPokemon (page, 'iron-jugulis');
    await expect(page.getByLabel('DARK', { exact: true })).toHaveText('DARK');
    await expect(page.getByText('FLYING')).toHaveText('FLYING');
  });
  
  test('Search Iron Moth', async ({page}) => {
    await selectPokemon (page, 'iron-moth');
    await expect(page.getByLabel('FIRE', { exact: true })).toHaveText('FIRE');
    await expect(page.getByLabel('POISON')).toHaveText('POISON');
  });
  
  test('Search Iron Thorns', async ({page}) => {
    await selectPokemon (page, 'iron-thorns');
    await expect(page.getByLabel('ROCK', { exact: true })).toHaveText('ROCK');
    await expect(page.getByLabel('ELECTRIC')).toHaveText('ELECTRIC');
  });
  
  test('Search Roaring Moon', async ({page}) => {
    await selectPokemon (page, 'roaring-');
    await expect(page.getByLabel('DRAGON', { exact: true })).toHaveText('DRAGON');
    await expect(page.getByLabel('DARK', { exact: true })).toHaveText('DARK');
  });
  
  test('Search Iron Valiant', async ({page}) => {
    await selectPokemon (page, 'iron-valiant');
    await expect(page.getByLabel('FAIRY', { exact: true })).toHaveText('FAIRY');
    await expect(page.getByLabel('FIGHTING')).toHaveText('FIGHTING');
  });
  


})
