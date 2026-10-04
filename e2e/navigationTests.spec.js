import { test, expect } from '../fixtures/fixtures.js'

test('Login Test', async ({ navigateTo, loginAsUser }) => 
{
  await navigateTo.landingPage();
  await loginAsUser.loginStandardUser();
});

