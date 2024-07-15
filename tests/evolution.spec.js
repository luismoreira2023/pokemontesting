// @ts-check
const { test, expect } = require('@playwright/test');
const { describe } = require('node:test');

const searchEvolution = async (page, item) => {
  await page.goto('');
  await page.getByLabel('ITEMS Button').click();
  await expect(page.getByLabel('Select Item')).toBeVisible();
  await page.getByLabel('Select the item ' + item).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of ' + item)).toBeVisible();
  await expect(page.getByText('Category:EVOLUTION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
};

test.describe.skip('Evolution Items', ()=>{
  test('Search Sun Stone', async ({ page }) => {
    await searchEvolution (page, 'sun-stone');
    await expect(page.getByText('Evolves a Cottonee into')).toHaveText("Evolves a Cottonee into Whimsicott, a Gloom into Bellossom, a Petilil into Lilligant, or a Sunkern into Sunflora.");
  });
});

test('Get Sun Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/sun-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves a Cottonee into Whimsicott, a Gloom into Bellossom, a Petilil into Lilligant, or a Sunkern into Sunflora.");
});

test('Get Moon Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/moon-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves a Clefairy into Clefable, a Jigglypuff into Wigglytuff, a Munna into Musharna, a Nidorina into Nidoqueen, a Nidorino into Nidoking, or a Skitty into Delcatty.");
});

test('Get Fire Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/fire-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves an Eevee into Flareon, a Growlithe into Arcanine, a Pansear into Simisear, or a Vulpix into Ninetales.");
});

test('Get Thunder Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/thunder-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves an Eelektrik into Eelektross, an Eevee into Jolteon, or a Pikachu into Raichu.");
});

test('Get Water Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/water-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves an Eevee into Vaporeon, a Lombre into Ludicolo, a Panpour into Simipour, a Poliwhirl into Poliwrath, a Shellder into Cloyster, or a Staryu into Starmie.");
});

test('Get Leaf Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/leaf-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves an Exeggcute into Exeggutor, a Gloom into Vileplume, a Nuzleaf into Shiftry, a Pansage into Simisage, or a Weepinbell into Victreebel.");
});

test('Get Oval Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/oval-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Level-up during Day on a Happiny: Holder evolves into Chansey.");
});

test('Get Dawn Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/dawn-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves a male Kirlia into Gallade or a female Snorunt into Froslass.");
});

test('Get Dusk Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/dusk-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves a Lampent into Chandelure, a Misdreavus into Mismagius, or a Murkrow into Honchkrow.");
});

test('Get Shiny Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/shiny-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves a Minccino into Cinccino, a Roselia into Roserade, or a Togetic into Togekiss.");
});

test('Get Ice Stone', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/ice-stone');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Evolves an Alola Sandshrew into Alola Sandslash or an Alola Vulpix into Alola Ninetales.");
});

test('Get Upgrade', async ({ page }) => {
  await page.goto('');
  await page.getByLabel('ITEMS Button').click();
  await expect(page.getByLabel('Select Item')).toBeVisible();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByLabel('Select the item up-grade').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of up-grade')).toBeVisible();
  await expect(page.getByText('Category:EVOLUTION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Traded on a Porygon: Holder')).toHaveText("Traded on a Porygon: Holder evolves into Porygon2.");
});

test('Get Whipped Dream', async ({ page }) => {
  await page.goto('');
  await page.getByLabel('ITEMS Button').click();
  await expect(page.getByLabel('Select Item')).toBeVisible();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByLabel('Select the item whipped-dream').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of whipped-dream')).toBeVisible();
  await expect(page.getByText('Category:EVOLUTION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Traded on a Swirlix: Holder')).toHaveText("Traded on a Swirlix: Holder evolves into Slurpuff.");
});