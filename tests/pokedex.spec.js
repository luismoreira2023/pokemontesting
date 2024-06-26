// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Bulbasaur', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon bulbasaur').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of bulbasaur')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByLabel('GRASS')).toHaveText("GRASS");
  await expect(page.getByLabel('POISON')).toHaveText("POISON");
  await expect(page.getByText('A strange seed was planted on')).toHaveText("A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.");
});


test('Search Nidoran male', async({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon nidoran-m').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of nidoran-m')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByLabel('POISON')).toHaveText("POISON");
  await expect(page.getByText('Stiffens its ears to sense')).toHaveText("Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.")
});

test('Search Heracross', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon heracross', { exact: true }).click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of heracross')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('BUG', { exact: true })).toHaveText("BUG");
  await expect(page.getByLabel('FIGHTING')).toHaveText("FIGHTING");
  await expect(page.getByText('It is usually docile, but if')).toHaveText("It is usually docile, but if it is disturbed while sipping honey, it chases off the intruder with its horn.")
});

test('Search Luvdisc', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon luvdisc').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of luvdisc')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByLabel('WATER')).toHaveText("WATER");
  await expect(page.getByText('LUVDISC live in shallow seas')).toHaveText("LUVDISC live in shallow seas in the tropics. This heart-shaped POKéMON earned its name by swimming afterloving couples it spotted in the ocean’s waves.")
});

test('Search Honchkrow', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon honchkrow').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of honchkrow')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByLabel('DARK', { exact: true })).toHaveText("DARK");
  await expect(page.getByLabel('FLYING')).toHaveText("FLYING");
  await expect(page.getByText('Becoming active at night, it')).toHaveText("Becoming active at night, it is known to swarm with numerous MURKROW in tow.")
});

test('Search Cryogonal', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon cryogonal').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of cryogonal')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByLabel('ICE', { exact: true })).toHaveText("ICE");
  await expect(page.getByText('When its body temperature')).toHaveText("When its body temperature goes up, it turns into steam and vanishes. When its temperature lowers, it returns to ice.")
});

test('Search Sylveon', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await page.getByLabel('Select the pokemon sylveon').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Open image of sylveon')).toBeVisible();
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByLabel('FAIRY', { exact: true })).toHaveText("FAIRY");
  await expect(page.getByText('It sends a soothing aura from')).toHaveText("It sends a soothing aura from its ribbonlike feelers to calm fights.");
});

test('Search Komala', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'KOMALA'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^NORMAL$/ }).nth(1)).toHaveText("NORMAL");
  await expect(page.getByText('It is born asleep, and it')).toHaveText("It is born asleep, and it dies asleep. All its movements are apparently no more than the results of it tossing and turning in its dreams.")
});

test('Search Perrserker', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'PERRSERKER'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^STEEL$/ }).nth(1)).toHaveText("STEEL");
  await expect(page.getByText('What appears to be an iron')).toHaveText("What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle.")
});

test('Search Garganacl', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'GARGANACL'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^ROCK$/ }).nth(1)).toHaveText("ROCK");
  await expect(page.getByText('Garganacl will rub its')).toHaveText("Garganacl will rub its fingertips together and sprinkle injured Pokémon with salt. Even severe wounds will promptly heal afterward.")
});

test('Search Scream Tail', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'SCREAM-TAIL'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^FAIRY$/ }).first()).toHaveText("FAIRY");
  await expect(page.locator('div').filter({ hasText: /^PSYCHIC$/ }).first()).toHaveText("PSYCHIC");
  await expect(page.getByText('There has been only one')).toHaveText("There has been only one reported sighting of this Pokémon. It resembles a mysterious creature depicted in an old expedition journal.")
});

test('Search Iron Hands', async ({page}) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'IRON-HANDS'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^FIGHTING$/ }).first()).toHaveText("FIGHTING");
  await expect(page.locator('div').filter({ hasText: /^ELECTRIC$/ }).first()).toHaveText("ELECTRIC");
  await expect(page.getByText('It is very similar to a')).toHaveText("It is very similar to a cyborg covered exclusively by a paranormal magazine. The cyborg was said to be the modified form of a certain athlete.")
});