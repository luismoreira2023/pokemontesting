// @ts-check
const { test, expect } = require('@playwright/test');

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

test('Search Sun Stone', async ({ page }) => {
  await searchEvolution (page, 'sun-stone');
  await expect(page.getByText('Evolves a Cottonee into')).toHaveText("Evolves a Cottonee into Whimsicott, a Gloom into Bellossom, a Petilil into Lilligant, or a Sunkern into Sunflora.");
});

test('Search Moon Stone', async ({ page }) => {
  await searchEvolution (page, 'moon-stone');
  await expect(page.getByText('Evolves a Clefairy into')).toHaveText("Evolves a Clefairy into Clefable, a Jigglypuff into Wigglytuff, a Munna into Musharna, a Nidorina into Nidoqueen, a Nidorino into Nidoking, or a Skitty into Delcatty.");
});

test('Search Fire Stone', async ({ page }) => {
  await searchEvolution (page, 'fire-stone');
  await expect(page.getByText('Evolves an Eevee into Flareon')).toHaveText("Evolves an Eevee into Flareon, a Growlithe into Arcanine, a Pansear into Simisear, or a Vulpix into Ninetales.");
});
test('Search Thunder Stone', async ({ page }) => {
  await searchEvolution (page, 'thunder-stone');
  await expect(page.getByText('Evolves an Eelektrik into')).toHaveText("Evolves an Eelektrik into Eelektross, an Eevee into Jolteon, or a Pikachu into Raichu.");
});

test('Search Water Stone', async ({ page }) => {
  await searchEvolution (page, 'water-stone');
  await expect(page.getByText('Evolves an Eevee into')).toHaveText("Evolves an Eevee into Vaporeon, a Lombre into Ludicolo, a Panpour into Simipour, a Poliwhirl into Poliwrath, a Shellder into Cloyster, or a Staryu into Starmie.");
});

test('Search Leaf Stone', async ({ page }) => {
  await searchEvolution (page, 'leaf-stone');
  await expect(page.getByText('Evolves an Exeggcute into')).toHaveText("Evolves an Exeggcute into Exeggutor, a Gloom into Vileplume, a Nuzleaf into Shiftry, a Pansage into Simisage, or a Weepinbell into Victreebel.");
});

test('Search Shiny Stone', async ({ page }) => {
  await searchEvolution (page, 'shiny-stone');
  await expect(page.getByText('Evolves a Minccino into')).toHaveText("Evolves a Minccino into Cinccino, a Roselia into Roserade, or a Togetic into Togekiss.");
});

test('Search Dusk Stone', async ({ page }) => {
  await searchEvolution (page, 'dusk-stone');
  await expect(page.getByText('Evolves a Lampent into')).toHaveText("Evolves a Lampent into Chandelure, a Misdreavus into Mismagius, or a Murkrow into Honchkrow.");
});

test('Search Dawn Stone', async ({ page }) => {
  await searchEvolution (page, 'dawn-stone');
  await expect(page.getByText('Evolves a male Kirlia into')).toHaveText("Evolves a male Kirlia into Gallade or a female Snorunt into Froslass.");
});

test('Search Oval Stone', async ({ page }) => {
  await searchEvolution (page, 'oval-stone');
  await expect(page.getByText('Level-up during Day on a')).toHaveText("Level-up during Day on a Happiny: Holder evolves into Chansey.");
});

test('Search Dragon Scale', async ({ page }) => {
  await searchEvolution (page, 'dragon-scale');
  await expect(page.getByText('Traded on a Seadra: Holder')).toHaveText("Traded on a Seadra: Holder evolves into Kingdra.");
});

test('Search Upgrade', async ({ page }) => {
  await searchEvolution (page, 'up-grade');
  await expect(page.getByText('Traded on a Porygon: Holder')).toHaveText("Traded on a Porygon: Holder evolves into Porygon2.");
});

test('Search Protector', async ({ page }) => {
  await searchEvolution (page, 'protector');
  await expect(page.getByText('Traded on a Rhydon: Holder')).toHaveText("Traded on a Rhydon: Holder evolves into Rhyperior.");
});

test('Search Electirizer', async ({ page }) => {
  await searchEvolution (page, 'electirizer');
  await expect(page.getByText('Traded on an Electabuzz:')).toHaveText("Traded on an Electabuzz: Holder evolves into Electivire.");
});

test('Search Magmarizer', async ({ page }) => {
  await searchEvolution (page, 'magmarizer');
  await expect(page.getByText('Traded on a Magmar: Holder')).toHaveText("Traded on a Magmar: Holder evolves into Magmortar.");
});

test('Search Dubious Disc', async ({ page }) => {
  await searchEvolution (page, 'dubious-disc');
  await expect(page.getByText('Traded on a Porygon2: Holder')).toHaveText("Traded on a Porygon2: Holder evolves into Porygon-Z.");
});

test('Search Reaper Cloth', async ({ page }) => {
  await searchEvolution (page, 'reaper-cloth');
  await expect(page.getByText('Traded on a Dusclops: Holder')).toHaveText("Traded on a Dusclops: Holder evolves into Dusknoir.");
});

test('Search Prism Scale', async ({ page }) => {
  await searchEvolution (page, 'prism-scale');
  await expect(page.getByText('Traded on a Feebas: Holder')).toHaveText("Traded on a Feebas: Holder evolves into Milotic.");
});

test('Search Whipped Dream', async ({ page }) => {
  await searchEvolution (page, 'whipped-dream');
  await expect(page.getByText('Traded on a Swirlix: Holder')).toHaveText("Traded on a Swirlix: Holder evolves into Slurpuff.");
});

test('Search Sachet', async ({ page }) => {
  await searchEvolution (page, 'sachet');
  await expect(page.getByText('Traded on a Spritzee: Holder')).toHaveText("Traded on a Spritzee: Holder evolves into Aromatisse.");
});

test('Search Ice Stone', async ({ page }) => {
  await searchEvolution (page, 'ice-stone');
  await expect(page.getByText('Evolves an Alola Sandshrew')).toHaveText("Evolves an Alola Sandshrew into Alola Sandslash or an Alola Vulpix into Alola Ninetales.");
});