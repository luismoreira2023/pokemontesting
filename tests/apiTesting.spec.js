// @ts-check
const { test, expect } = require('@playwright/test');

test('Get Pokémon list', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150');
  const pokemonList = await response.json();
  console.log(pokemonList);
  expect(pokemonList.count).toBe(1302);
  expect(pokemonList.results[0].name).toBe("bulbasaur");
});

test('Get Pokémon Machamp', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/machamp');
  const pokemon = await response.json();
  console.log(pokemon);
});

test('Get Pokémon Iron Thorns', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/iron-thorns');
  const pokemon = await response.json();
  console.log(pokemon);
});

test('Get Jaw Fossil', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/jaw-fossil');
  const item = await response.json();
  console.log(item);
});

test('Get Moon Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/moon-ball');
  const item = await response.json();
  console.log(item);
});

test('Get Yellow Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/yellow-apricorn/');
  const item = await response.json();
  console.log(item);
});

test('Get Normal type', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/type/normal/');
  const type = await response.json();
  console.log(type);
});

test('Get Paldea region', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/region/paldea/');
  const region = await response.json();
  console.log(region);
});