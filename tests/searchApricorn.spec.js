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

test('Search Blue Apricorn', async ({ page }) => {
  await selectApricorn(page, 'blue-apricorn');
  await expect(page.getByText('Used to make a Lure Ball.')).toHaveText("Used to make a Lure Ball.");
});

test('Search Lure Ball', async ({ page }) => {
  await apricornBall(page, 'lure-ball');
  await expect(page.getByText('3× effectiveness while')).toHaveText("3× effectiveness while fishing. Made from Blu Apricorn.");
});

test('Search Yellow Apricorn', async ({ page }) => {
  await selectApricorn(page, 'yellow-apricorn');
  await expect(page.getByText('Used to make a Moon Ball.')).toHaveText("Used to make a Moon Ball.");
});

test('Search Moon Ball', async ({ page }) => {
  await apricornBall(page, 'moon-ball');
  await expect(page.getByText('4× effectiveness on familes')).toHaveText("4× effectiveness on familes of Pokémon with a Moon Stone evolution. Made from Ylw Apricorn.");
});

test('Search Green Apricorn', async ({ page }) => {
  await selectApricorn(page, 'green-apricorn');
  await expect(page.getByText('Used to make a Friend Ball.')).toHaveText("Used to make a Friend Ball.");
});

test('Search Friend Ball', async ({ page }) => {
  await apricornBall(page, 'friend-ball');
  await expect(page.getByText('Caught Pokémon start with 200')).toHaveText("Caught Pokémon start with 200 happiness. Made from Grn Apricorn.");
});

test('Search Pink Apricorn', async ({ page }) => {
  await selectApricorn(page, 'pink-apricorn');
  await expect(page.getByText('Used to make a Love Ball.')).toHaveText("Used to make a Love Ball.");
});

test('Search Love Ball', async ({ page }) => {
  await apricornBall(page, 'love-ball');
  await expect(page.getByText('8× effectiveness on opposite')).toHaveText("8× effectiveness on opposite sex, same species targets of the Active Pokémon. Made from Pnk Apricorn.");
});

test('Search White Apricorn', async ({ page }) => {
  await selectApricorn(page, 'white-apricorn');
  await expect(page.getByText('Used to make a Fast Ball.')).toHaveText("Used to make a Fast Ball.");
});

test('Search Fast Ball', async ({ page }) => {
  await apricornBall(page, 'fast-ball');
  await expect(page.getByText('4× effectiveness on Pokémon')).toHaveText("4× effectiveness on Pokémon with 100 or greater base speed. (Gen II: Roaming or Fleeing Pokémon). Made from Wht Apricorn.");
});

test('Search Black Apricorn', async ({ page }) => {
  await selectApricorn(page, 'black-apricorn');
  await expect(page.getByText('Used to make a Heavy Ball.')).toHaveText("Used to make a Heavy Ball.");
});

test('Search Heavy Ball', async ({ page }) => {
  await apricornBall(page, 'heavy-ball');
  await expect(page.getByText('Has flat bonus or penalty to')).toHaveText("Has flat bonus or penalty to catch rate depending on weight class of target. Made from Blk Apricorn.");
});
})
