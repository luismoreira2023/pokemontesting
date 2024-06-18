// @ts-check
const { test, expect } = require('@playwright/test');

test('Search Bulbasaur', async ({ page }) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByRole('button', { name: 'POKÉMON' })).toBeVisible();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible();
  await page.getByRole('button', { name: 'BULBASAUR' }).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^GRASS$/ }).first()).toHaveText("GRASS");
  await expect(page.locator('div').filter({ hasText: /^POISON$/ }).first()).toHaveText("POISON");
  await expect(page.getByText('A strange seed was planted on')).toHaveText("A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.");
});


test('Search Nidoran male', async({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'NIDORAN-M'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^POISON$/ }).nth(1)).toHaveText("POISON");
  await expect(page.getByText('Stiffens its ears to sense')).toHaveText("Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.")
});

test('Search Heracross', async ({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'HERACROSS'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^BUG$/ }).first()).toHaveText("BUG");
  await expect(page.locator('div').filter({ hasText: /^FIGHTING$/ }).first()).toHaveText("FIGHTING");
  await expect(page.getByText('It is usually docile, but if')).toHaveText("It is usually docile, but if it is disturbed while sipping honey, it chases off the intruder with its horn.")
});

test('Search Luvdisc', async ({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'LUVDISC'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^WATER$/ }).nth(1)).toHaveText("WATER");
  await expect(page.getByText('LUVDISC live in shallow seas')).toHaveText("LUVDISC live in shallow seas in the tropics. This heart-shaped POKéMON earned its name by swimming afterloving couples it spotted in the ocean’s waves.")
});

test('Search Honchkrow', async ({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'HONCHKROW'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^DARK$/ }).first()).toHaveText("DARK");
  await expect(page.locator('div').filter({ hasText: /^FLYING$/ }).first()).toHaveText("FLYING");
  await expect(page.getByText('Becoming active at night, it')).toHaveText("Becoming active at night, it is known to swarm with numerous MURKROW in tow.")
});

test('Search Cryogonal', async ({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'CRYOGONAL'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^ICE$/ }).nth(1)).toHaveText("ICE");
  await expect(page.getByText('When its body temperature')).toHaveText("When its body temperature goes up, it turns into steam and vanishes. When its temperature lowers, it returns to ice.")
});

test('Search Sylveon', async ({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page).toHaveTitle(/Pokedex/);
  await page.getByRole('button', { name: 'POKÉMON' }).click();
  await expect(page.getByText('SELECT POKÉMON')).toBeVisible;
  await page.getByRole('button', {name: 'SYLVEON'}).click();
  await page.getByRole('button', { name: 'PHOTO' }).click();
  await expect(page.getByRole('img', { name: 'selectedPokemon' })).toBeVisible();
  await page.getByRole('button', { name: 'INFO' }).click();
  await expect(page.getByRole('button', { name: 'INFO' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^FAIRY$/ }).nth(1)).toHaveText("FAIRY");
  await expect(page.getByText('It sends a soothing aura from')).toHaveText("It sends a soothing aura from its ribbonlike feelers to calm fights.");
});

test('Search Komala', async ({page}) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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
  await page.goto('https://brunomachadors.github.io/pokedex/');
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