// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('Search Helix Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'HELIX-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Dome Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'DOME-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Old Amber', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'OLD-AMBER'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Root Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'ROOT-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Claw Fossil', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'CLAW-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Skull Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'SKULL-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Armor Fossil', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'ARMOR-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Cover Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'COVER-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Plume Fossil', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'PLUME-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Jaw Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'JAW-FOSSIL'}).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Sail Fossil', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'SAIL-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});