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
});

test('Get Koraidon', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/koraidon/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("This Pokémon resembles Cyclizar, but it is far burlier and more ferocious. Nothing is known about its ecology or other features.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});

test('Get Walking Wake', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/walking-wake/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("This ferocious creature is shrouded in mystery. It's named after an aquatic monster mentioned in an old expedition journal.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("It resembles an illustration published in a paranormal magazine, said to be a depiction of a super-ancient Suicune.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});

test('Get Gouging Fire', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/gouging-fire/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("There are scant few reports of this creature being sighted. One short video shows it rampaging and spouting pillars of flame.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("It resembles an eerie Pokémon once shown in a paranormal magazine. That Pokémon was said to be an Entei regenerated from a fossil.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});

test('Get Raging Bolt', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/raging-bolt/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("It's said to incinerate everything around it with lightning launched from its fur. Very little is known about this creature.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("It bears resemblance to a Pokémon that became a hot topic for a short while after a paranormal magazine touted it as Raikou's ancestor.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});

test('Get Miraidon', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/miraidon/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("Much remains unknown about this creature. It resembles Cyclizar, but it is far more ruthless and powerful.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});

test('Get Iron Leaves', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/iron-leaves/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("Many of its physical characteristics match those of a Virizion from the future that was covered in a paranormal magazine.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("According to the few eyewitness accounts that exist, it used its shining blades to julienne large trees and boulders.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});

test('Get Iron Boulder', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/iron-boulder/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("It resembles a Pokémon described in a dubious magazine as a Terrakion that had been modified by an evil organization.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("It was named after a mysterious object recorded in an old book. Its body seems to be metallic.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});

test('Get Iron Crown', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/iron-crown/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("It resembles a mysterious object introduced in a paranormal magazine as a cutting-edge weapon shaped like a Cobalion.");
  console.log(pokemon.flavor_text_entries[0].version.name);
  await expect(pokemon.flavor_text_entries[0].version.name).toBe("scarlet");
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("There was supposedly an incident in which it launched shining blades to cut everything around it to pieces. Little else is known about it.");
  console.log(pokemon.flavor_text_entries[1].version.name);
  await expect(pokemon.flavor_text_entries[1].version.name).toBe("violet");
});