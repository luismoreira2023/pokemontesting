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
  console.log(pokemon.abilities[0].ability.name);
  await expect(pokemon.abilities[0].ability.name).toBe('guts');
  console.log(pokemon.abilities[1].ability.name);
  await expect(pokemon.abilities[1].ability.name).toBe('no-guard');
  console.log(pokemon.abilities[2].ability.name);
  await expect(pokemon.abilities[2].ability.name).toBe('steadfast');
});

test('Get Pokémon Iron Thorns', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/iron-thorns');
  const pokemon = await response.json();
  console.log(pokemon.abilities[0].ability.name);
  await expect(pokemon.abilities[0].ability.name).toBe('quark-drive');
});

test('Get Jaw Fossil', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/jaw-fossil');
  const item = await response.json();
  console.log(item.effect_entries[0].effect);
  await expect(item.effect_entries[0].effect).toBe('Can be revived into a Tyrunt.');
});

test('Get Moon Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/moon-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe('4× effectiveness on familes of Pokémon with a Moon Stone evolution. Made from Ylw Apricorn.');
});

test('Get Yellow Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/yellow-apricorn/');
  const item = await response.json();
  console.log(item.effect_entries[0].effect);
  await expect(item.effect_entries[0].effect).toBe('May be given to Kurt in azalea town to produce a moon ball.');
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe('Used to make a Moon Ball.');
});

test('Get Normal type', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/type/normal/');
  const type = await response.json();
  console.log('Takes double damage from ' + type.damage_relations.double_damage_from[0].name);
  await expect(type.damage_relations.double_damage_from[0].name).toBe('fighting');
  console.log('Deals half damage to ' + type.damage_relations.half_damage_to[0].name);
  await expect(type.damage_relations.half_damage_to[0].name).toBe('rock');
  console.log('Deals half damage to ' + type.damage_relations.half_damage_to[1].name);
  await expect(type.damage_relations.half_damage_to[1].name).toBe('steel');
  console.log('Takes no damage from ' + type.damage_relations.no_damage_from[0].name);
  await expect(type.damage_relations.no_damage_from[0].name).toBe('ghost');
  console.log('Deals no damage to ' + type.damage_relations.no_damage_to[0].name);
  await expect(type.damage_relations.no_damage_to[0].name).toBe('ghost');
});

test('Get Paldea region', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/region/paldea/');
  const region = await response.json();
  console.log(region.version_groups[0].name);
  await expect(region.version_groups[0].name).toBe('scarlet-violet');
  console.log(region.version_groups[1].name);
  await expect(region.version_groups[1].name).toBe('the-teal-mask');
  console.log(region.version_groups[2].name);
  await expect(region.version_groups[2].name).toBe('the-indigo-disk');
});