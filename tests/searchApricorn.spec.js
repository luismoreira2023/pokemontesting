// @ts-check
const { test, expect } = require('@playwright/test');

const selectApricorn = async (page, apricorn) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('ITEMS Button').click();
  await expect(page.getByLabel('Select Item')).toBeVisible();
  await page.getByLabel('Select the item ' + apricorn).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of ' + apricorn)).toBeVisible();
  await expect(page.getByText('Category:APRICORN-BOX')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
};

const apricornBall = async (page, ball) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('ITEMS Button').click();
  await expect(page.getByLabel('Select Item')).toBeVisible();
  await page.getByLabel('Select the item ' + ball).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of ' + ball)).toBeVisible();
  await expect(page.getByText('Category:APRICORN-BALLS')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
};

test.describe.skip('Apricorn tests', ()=>{
  test('Search Red Apricorn', async ({ page }) => {
    await selectApricorn(page, 'red-apricorn');
    await expect(page.getByText('Used to make a Level Ball.')).toHaveText('Used to make a Level Ball.');
});
  test('Search Level Ball', async ({ page }) => {
    await apricornBall(page, 'level-ball');
    await expect(page.getByText('Success rate based off of')).toHaveText("Success rate based off of fraction target Pokémon is of user's Pokémon. Made from Red Apricorn.");
});
});

test('Get Red Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/red-apricorn');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Used to make a Level Ball.");
});

test('Get Level Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/level-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Success rate based off of fraction target Pokémon is of user's Pokémon. Made from Red Apricorn.");
});

test('Get Blue Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/blue-apricorn');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Used to make a Lure Ball.");
});

test('Get Lure Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/lure-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("3× effectiveness while fishing. Made from Blu Apricorn.");
});

test('Get Yellow Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/yellow-apricorn');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Used to make a Moon Ball.");
});

test('Get Moon Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/moon-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("4× effectiveness on familes of Pokémon with a Moon Stone evolution. Made from Ylw Apricorn.");
});

test('Get Green Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/green-apricorn');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Used to make a Friend Ball.");
});

test('Get Friend Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/friend-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Caught Pokémon start with 200 happiness. Made from Grn Apricorn.");
});

test('Get Pink Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/pink-apricorn');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Used to make a Love Ball.");
});

test('Get Love Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/love-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("8× effectiveness on opposite sex, same species targets of the Active Pokémon. Made from Pnk Apricorn.");
});

test('Get White Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/white-apricorn');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Used to make a Fast Ball.");
});

test('Get Fast Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/fast-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("4× effectiveness on Pokémon with 100 or greater base speed. (Gen II: Roaming or Fleeing Pokémon). Made from Wht Apricorn.");
});

test('Get Black Apricorn', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/black-apricorn');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Used to make a Heavy Ball.");
});

test('Get Heavy Ball', async ({ page }) => {
  const response = await page.request.get('https://pokeapi.co/api/v2/item/heavy-ball');
  const item = await response.json();
  console.log(item.effect_entries[0].short_effect);
  await expect(item.effect_entries[0].short_effect).toBe("Has flat bonus or penalty to catch rate depending on weight class of target. Made from Blk Apricorn.");
});