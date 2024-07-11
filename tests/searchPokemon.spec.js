// @ts-check
const { test, expect } = require('@playwright/test');

test('Get Omanyte', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/omanyte/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("Although long\nextinct, in rare\ncases, it can be\fgenetically\nresurrected from\nfossils.");
});

test('Get Kabuto', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/kabuto/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("A POKéMON that\nwas resurrected\nfrom a fossil\ffound in what was\nonce the ocean\nfloor eons ago.");
});

test('Get Aerodactyl', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/aerodactyl/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("A Pokémon that roamed the skies\nin the dinosaur era. Its teeth are\nlike saw blades.");
});

test('Get Lileep', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/lileep/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("LILEEP became extinct approximately\na hundred million years ago.\nThis ancient POKéMON attaches itself\fto a rock on the seafloor and catches\napproaching prey using tentacles \nshaped like flower petals.");
});

test('Get Anorith', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/anorith/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("ANORITH was regenerated from a\nprehistoric fossil. This primitive\nPOKéMON once lived in warm seas.\fIt grips its prey firmly between its\ntwo large claws.");
});

test('Get Cranidos', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/cranidos/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("It lived in jungles around 100\nmillion years ago. Its skull is as\nhard as iron.");
});

test('Get Shieldon', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/shieldon/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[0].flavor_text);
  await expect(pokemon.flavor_text_entries[0].flavor_text).toBe("A Pokémon that lived in jungles\naround 100 million years ago. Its\nfacial hide is extremely hard.");
});

test('Get Tirtouga',async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/tirtouga/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("Restored from a fossil, this Pokémon\ncan dive to depths beyond half a mile.");
});

test('Get Archen', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/archen/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[1].flavor_text);
  await expect(pokemon.flavor_text_entries[1].flavor_text).toBe("Said to be an ancestor of bird Pokémon,\nthey were unable to fly and moved about\nby hopping from one branch to another.");
});

test('Get Tyrunt', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/tyrunt/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[6].flavor_text);
  await expect(pokemon.flavor_text_entries[6].flavor_text).toBe("This Pokémon was restored from a fossil.\nIf something happens that it doesn’t like,\nit throws a tantrum and runs wild.");
});

test('Get Amaura', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/amaura/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[6].flavor_text);
  await expect(pokemon.flavor_text_entries[6].flavor_text).toBe("This ancient Pokémon was restored\nfrom part of its body that had been\nfrozen in ice for over 100 million years.");
});

test('Get Dracozolt', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/dracozolt/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[7].flavor_text);
  await expect(pokemon.flavor_text_entries[7].flavor_text).toBe("In ancient times, it was unbeatable thanks to its\npowerful lower body, but it went extinct anyway\nafter it depleted all its plant-based food sources.");
});

test('Get Arctozolt', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/arctozolt/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[7].flavor_text);
  await expect(pokemon.flavor_text_entries[7].flavor_text).toBe("The shaking of its freezing upper half is what\ngenerates its electricity. It has a hard time\nwalking around.");
});

test('Get Dracovish', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/dracovish/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[7].flavor_text);
  await expect(pokemon.flavor_text_entries[7].flavor_text).toBe("Powerful legs and jaws made it the apex predator\nof its time. Its own overhunting of its prey was\nwhat drove it to extinction.");
});

test('Get Arctovish', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/pokemon-species/arctovish/');
  const pokemon = await response.json();
  console.log(pokemon.flavor_text_entries[7].flavor_text);
  await expect(pokemon.flavor_text_entries[7].flavor_text).toBe("Though it’s able to capture prey by freezing its\nsurroundings, it has trouble eating the prey\nafterward because its mouth is on top of its head.");
});