// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Helix Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilhelix-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of helix-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into an')).toHaveText('Can be revived into an Omanyte.');
});

test('Search Dome Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossildome-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of dome-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a Kabuto.')).toHaveText('Can be revived into a Kabuto.');
});

test('Search Old Amber', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilold-amber').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of old-amber')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into an')).toHaveText('Can be revived into an Aerodactyl.');
});

test('Search Root Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilroot-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of root-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a Lileep.')).toHaveText('Can be revived into a Lileep.');
});

test('Search Claw Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilclaw-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of claw-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into an')).toHaveText('Can be revived into an Anorith.');
});

test('Search Skull Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilskull-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of skull-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a')).toHaveText('Can be revived into a Cranidos.');
});

test('Search Armor Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilarmor-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of armor-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a')).toHaveText('Can be revived into a Shieldon.');
});

test('Search Cover Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilcover-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of cover-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a')).toHaveText('Can be revived into a tirtouga.');
});

test('Search Plume Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilplume-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of plume-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a archen.')).toHaveText('Can be revived into a archen.');
});

test('Search Jaw Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossiljaw-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of jaw-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into a Tyrunt.')).toHaveText('Can be revived into a Tyrunt.');
});

test('Search Sail Fossil', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilsail-fossil').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of sail-fossil')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('Can be revived into an Amaura.')).toHaveText('Can be revived into an Amaura.');
});

test('Search Fossilized Bird', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilfossilized-bird').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-bird')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});

test('Search Fossilized Fish', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilfossilized-fish').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-fish')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});

test('Search Fossilized Drake', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilfossilized-drake').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-drake')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});

test('Search Fossilized Dino', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();
  await page.getByLabel('Select the fossilfossilized-dino').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of fossilized-dino')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
});