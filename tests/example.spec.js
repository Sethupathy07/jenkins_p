import { test } from '../hooks/globalHooks';
import user from '../testdata/userData.json'

test('SauceDemo', async ({ loginPage}) => {

  await loginPage.login(
    user.user9.name,
    user.password
  );

})