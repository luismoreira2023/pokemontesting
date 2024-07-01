// @ts-check
const { test, expect } = require('@playwright/test');

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
  await selectFossil(page, 'old-amber');
  await expect(page.getByText('Can be revived into an')).toHaveText(
    'Can be revived into an Aerodactyl.'
  );
});

test('Search Root Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'root-fossil');
  await expect(page.getByText('Can be revived into a Lileep.')).toHaveText(
    'Can be revived into a Lileep.'
  );
});

test('Search Claw Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'claw-fossil');
  await expect(page.getByText('Can be revived into an')).toHaveText(
    'Can be revived into an Anorith.'
  );
});

test('Search Skull Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'skull-fossil');
  await expect(page.getByText('Can be revived into a')).toHaveText(
    'Can be revived into a Cranidos.'
  );
});

test('Search Armor Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'armor-fossil');
  await expect(page.getByText('Can be revived into a')).toHaveText(
    'Can be revived into a Shieldon.'
  );
});

test('Search Cover Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'cover-fossil');
  await expect(page.getByText('Can be revived into a')).toHaveText(
    'Can be revived into a tirtouga.'
  );
});

test('Search Plume Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'plume-fossil');
  await expect(page.getByText('Can be revived into a archen.')).toHaveText(
    'Can be revived into a archen.'
  );
});

test('Search Jaw Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'jaw-fossil');
  await expect(page.getByText('Can be revived into a Tyrunt.')).toHaveText(
    'Can be revived into a Tyrunt.'
  );
});

test('Search Sail Fossil', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'sail-fossil');
  await expect(page.getByText('Can be revived into an Amaura.')).toHaveText(
    'Can be revived into an Amaura.'
  );
});

test('Search Fossilized Bird', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'fossilized-bird');
});

test('Search Fossilized Fish', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'fossilized-fish');
});

test('Search Fossilized Drake', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'fossilized-drake');
});

test('Search Fossilized Dino', async ({ page }) => {
  await fossilInitialSteps(page);
  await selectFossil(page, 'fossilized-dino');
});
