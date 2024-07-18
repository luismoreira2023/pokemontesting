const { test, expect } = require('@playwright/test');
const { EEVEE_EVOLUTIONS, TYROGUE_EVOLUTIONS } = require('../constants');

test('Get Pokémon evolutions from Bulbasaur', async ({ page }) => {
  const response = await page.request.get(
    'https://pokeapi.co/api/v2/pokemon/1'
  );
  const pokemon = await response.json();
  const speciesResponse = await page.request.get(pokemon.species.url);
  const species = await speciesResponse.json();

  const evolutionChainResponse = await page.request.get(
    species.evolution_chain.url
  );
  const evolutionChain = await evolutionChainResponse.json();

  const firstEvolution = evolutionChain.chain.evolves_to[0].species.name;

  const secondEvolution =
    evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;

  test.step('Validate first evolution ' + firstEvolution, () => {
    console.log(firstEvolution);
    expect(firstEvolution).toBe('ivysaur');
  });

  test.step('Validate second evolution ' + secondEvolution, () => {
    console.log(secondEvolution);
    expect(secondEvolution).toBe('venusaur');
  });
});

test('Get Pokémon evolutions from Wurmple', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/wurmple');
  const pokemon = await response.json();
  console.log(pokemon.species.url);
  const speciesResponse = await page.request.get(pokemon.species.url);
  const species = await speciesResponse.json();
  console.log(species);
  const evolutionChainResponse = await page.request.get(
    species.evolution_chain.url
  );
  const evolutionChain = await evolutionChainResponse.json();
  console.log(evolutionChain.chain.evolves_to);
  const firstEvolution_1 = evolutionChain.chain.evolves_to[0].species.name;
  test.step('Validate first evolution branch 1: ' + firstEvolution_1, () => {
    console.log('Wurmple evolves to ' + firstEvolution_1);
    expect(firstEvolution_1).toBe('silcoon');
  });
  console.log(evolutionChain.chain.evolves_to[0].evolves_to);
  const secondEvolution_1 = evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
  test.step('Validate second evolution branch 1: ' + secondEvolution_1, () => {
    console.log('Silcoon evolves to ' + secondEvolution_1);
    expect(secondEvolution_1).toBe('beautifly')
  });
  const firstEvolution_2 = evolutionChain.chain.evolves_to[1].species.name;
  test.step('Validate first evolution branch 2: ' + firstEvolution_2, () => {
    console.log('Wurmple evolves to ' + firstEvolution_2);
    expect(firstEvolution_2).toBe('cascoon');
  });
  console.log(evolutionChain.chain.evolves_to[1].evolves_to);
  const secondEvolution_2 = evolutionChain.chain.evolves_to[1].evolves_to[0].species.name;
  test.step('Validate second evolution branch 2: ' + secondEvolution_2, () => {
    console.log('Cascoon evolves to ' + secondEvolution_2);
    expect(secondEvolution_2).toBe('dustox')
  });
});

test('Get Pokémon evolutions from Eevee', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/eevee');
  const pokemon = await response.json();
  //console.log(pokemon.species.url);
  const speciesResponse = await page.request.get(pokemon.species.url);
  const species = await speciesResponse.json();
  //console.log(species);
  const evolutionChainResponse = await page.request.get(species.evolution_chain.url);
  const evolutionChain = await evolutionChainResponse.json();
  //console.log(evolutionChain.chain.evolves_to);
  const evolutions = evolutionChain.chain.evolves_to;
  evolutions.forEach(evolution => {
    console.log('Eevee evolves to ' + evolution.species.name);
    expect(EEVEE_EVOLUTIONS.includes(evolution.species.name)).toBeTruthy();
  });
});

test('Get Pokémon evolutions from Tyrogue', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/236');
  const pokemon = await response.json();
  //console.log(pokemon.species.url);
  const speciesResponse = await page.request.get(pokemon.species.url);
  const species = await speciesResponse.json();
  //console.log(species);
  const evolutionChainResponse = await page.request.get(species.evolution_chain.url);
  const evolutionChain = await evolutionChainResponse.json();
  //console.log(evolutionChain);
  const evolutions = evolutionChain.chain.evolves_to;
  evolutions.forEach(evolution => {
    console.log('Tyrogue evolves to ' + evolution.species.name);
    expect(TYROGUE_EVOLUTIONS.includes(evolution.species.name)).toBeTruthy();
  });
});

test('Get Pokémon forms from Rotom', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/479');
  const pokemon = await response.json();
  //console.log(pokemon.species.url);
  const speciesResponse = await page.request.get(pokemon.species.url);
  const species = await speciesResponse.json();
  console.log(species.varieties[0].pokemon.name);
  console.log(species.varieties[1].pokemon.name);
  console.log(species.varieties[2].pokemon.name);
  console.log(species.varieties[3].pokemon.name);
  console.log(species.varieties[4].pokemon.name);
  console.log(species.varieties[5].pokemon.name);
});

test('Get Pokémon evolution from Surskit', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/283');
  const pokemon = await response.json();
  //console.log(pokemon.species.url);
  const speciesResponse = await page.request.get(pokemon.species.url);
  const species = await speciesResponse.json();
  //console.log(species);
  const evolutionChainResponse = await page.request.get(species.evolution_chain.url);
  const evolutionChain = await evolutionChainResponse.json();
  //console.log(evolutionChain.chain.evolves_to);
  const evolution = evolutionChain.chain.evolves_to[0].species.name;
  test.step('Validate evolution: ' + evolution, () => {
    console.log('Surskit evolves to ' + evolution);
    expect (evolution).toBe('masquerain');
  });
});

test('Get Pokémon evolution from Wobbuffet', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon/202');
  const pokemon = await response.json();
  //console.log(pokemon.species.url);
  const speciesResponse = await page.request.get(pokemon.species.url);
  const species = await speciesResponse.json();
  //console.log(species);
  const baby_form = species.evolves_from_species.name;
  console.log('Wobbuffet evolves from ' + baby_form);
  expect (baby_form).toBe('wynaut');
});