// @ts-check
const { test, expect } = require('@playwright/test');

<<<<<<< Updated upstream
test.skip('Search Helix Fossil', async ({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'JAW-FOSSIL'}).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});

test.skip('Search Sail Fossil', async({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'ITEMS' }).click();
  await expect(page.getByText('SELECT ITEM')).toBeVisible();
  await page.getByRole('button', {name: 'SAIL-FOSSIL'}).click();
  await page.getByRole('button', { name: 'PHOTO', exact: true }).click();
  await expect(page.getByRole('img', { name: 'selectedItem' })).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
});
=======
const fossilInitialSteps = async (page) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
};

const selectFossil = async (page, fossil) => {
  await page.getByLabel('Select the fossil' + fossil).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of ' + fossil)).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
};

test('Search Helix Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'helix-fossil');
  await expect(page.getByText('Can be revived into an')).toHaveText(
    'Can be revived into an Omanyte.'
  );
});

test('Search Dome Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'dome-fossil');
  await expect(page.getByText('Can be revived into a Kabuto.')).toHaveText(
    'Can be revived into a Kabuto.'
  );
});

test('Search Old Amber', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilold-amber').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of old-amber')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into an')).toHaveText(
    'Can be revived into an Aerodactyl.'
  );
});

test('Search Root Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilroot-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of root-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a Lileep.')).toHaveText(
    'Can be revived into a Lileep.'
  );
});

test('Search Claw Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilclaw-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of claw-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into an')).toHaveText(
    'Can be revived into an Anorith.'
  );
});

test('Search Skull Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilskull-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of skull-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a')).toHaveText(
    'Can be revived into a Cranidos.'
  );
});

test('Search Armor Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilarmor-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of armor-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a')).toHaveText(
    'Can be revived into a Shieldon.'
  );
});

test('Search Cover Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilcover-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of cover-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a')).toHaveText(
    'Can be revived into a tirtouga.'
  );
});

test('Search Plume Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilplume-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of plume-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a archen.')).toHaveText(
    'Can be revived into a archen.'
  );
});

test('Search Jaw Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossiljaw-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of jaw-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a Tyrunt.')).toHaveText(
    'Can be revived into a Tyrunt.'
  );
});

test('Search Sail Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilsail-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of sail-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into an Amaura.')).toHaveText(
    'Can be revived into an Amaura.'
  );
});

test('Search Fossilized Bird', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilfossilized-bird').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-bird')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});

test('Search Fossilized Fish', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilfossilized-fish').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-fish')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});

test('Search Fossilized Drake', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilfossilized-drake').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-drake')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});

test('Search Fossilized Dino', async ({ page }) => {
  await fossilInitialSteps(page);
  await page.getByLabel('Select the fossilfossilized-dino').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-dino')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});
>>>>>>> Stashed changes
