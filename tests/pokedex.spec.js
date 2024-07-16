// @ts-check
const { test, expect } = require('@playwright/test');

const pokemonInitialSteps = async (page) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
};

const selectPokemon = async (page, pokemon, index) => {
  await page.getByRole('button', { name: index }).click();
  await page.getByLabel('Select the pokemon ' + pokemon).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of ' + pokemon)).toBeVisible();
  await page.getByLabel('Switch to Info').click();
};

test.describe.serial('Pokemon Pokedex', () => {
  test('Search Bulbasaur', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'bulbasaur', '1');
    await expect(page.getByLabel('GRASS')).toHaveText('GRASS');
    await expect(page.getByLabel('POISON')).toHaveText('POISON');
    await expect(page.getByText('A strange seed was planted on')).toHaveText(
      'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.'
    );
  });

  test('Search Nidoran male', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'nidoran-m', '1');
    await expect(page.getByLabel('POISON')).toHaveText('POISON');
    await expect(page.getByText('Stiffens its ears to sense')).toHaveText(
      'Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.'
    );
  });

  test('Search Heracross', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'Heracross', '2');
    await expect(page.getByLabel('BUG', { exact: true })).toHaveText('BUG');
    await expect(page.getByLabel('FIGHTING')).toHaveText('FIGHTING');
    await expect(page.getByText('It is usually docile, but if')).toHaveText(
      'It is usually docile, but if it is disturbed while sipping honey, it chases off the intruder with its horn.'
    );
  });

  test('Search Luvdisc', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'luvdisc', '3');
    await expect(page.getByLabel('WATER')).toHaveText('WATER');
    await expect(page.getByText('LUVDISC live in shallow seas')).toHaveText(
      'LUVDISC live in shallow seas in the tropics. This heart-shaped POKéMON earned its name by swimming afterloving couples it spotted in the ocean’s waves.'
    );
  });

  test('Search Honchkrow', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'honchkrow', '3');
    await expect(page.getByLabel('DARK', { exact: true })).toHaveText('DARK');
    await expect(page.getByLabel('FLYING')).toHaveText('FLYING');
    await expect(page.getByText('Becoming active at night, it')).toHaveText(
      'Becoming active at night, it is known to swarm with numerous MURKROW in tow.'
    );
  });

  test('Search Cryogonal', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'cryogonal', '5');
    await expect(page.getByLabel('ICE', { exact: true })).toHaveText('ICE');
    await expect(page.getByText('When its body temperature')).toHaveText(
      'When its body temperature goes up, it turns into steam and vanishes. When its temperature lowers, it returns to ice.'
    );
  });

  test('Search Sylveon', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'sylveon', '5');
    await expect(page.getByLabel('FAIRY', { exact: true })).toHaveText('FAIRY');
    await expect(page.getByText('It sends a soothing aura from')).toHaveText(
      'It sends a soothing aura from its ribbonlike feelers to calm fights.'
    );
  });

  test('Search Komala', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'komala', '6');
    await expect(page.getByLabel('NORMAL', { exact: true })).toHaveText(
      'NORMAL'
    );
    await expect(page.getByText('It is born asleep, and it')).toHaveText(
      'It is born asleep, and it dies asleep. All its movements are apparently no more than the results of it tossing and turning in its dreams.'
    );
  });

  test('Search Perrserker', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'perrserker', '6');
    await expect(page.getByText('STEEL', { exact: true })).toHaveText('STEEL');
    await expect(page.getByText('What appears to be an iron')).toHaveText(
      'What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle.'
    );
  });

  test('Search Garganacl', async ({ page }) => {
    await pokemonInitialSteps(page);
    await selectPokemon(page, 'garganacl', '7');
    await expect(page.getByLabel('ROCK', { exact: true })).toHaveText('ROCK');
    await expect(page.getByText('Garganacl will rub its')).toHaveText(
      'Garganacl will rub its fingertips together and sprinkle injured Pokémon with salt. Even severe wounds will promptly heal afterward.'
    );
  });
});
