const { test, expect } = require('@playwright/test');

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
