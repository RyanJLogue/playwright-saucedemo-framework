import {test as base} from '@playwright/test';
import LoginAsUser from '../utilities/login';
import NavigateTo from '../utilities/navigation';

export const test = base.extend(
{
    navigateTo: async ({ page }, use) =>
    {
        const util = new NavigateTo(page);
        await use(util)
    },
    loginAsUser: async ({ page }, use) =>
    {
        const util = new LoginAsUser(page);
        await use(util);
    }
});
export const expect = base.expect;