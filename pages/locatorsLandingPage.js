export default class LocatorsLandingPage
{
    constructor(page)
    {
        this.usernameField  = page.locator('#user-name');
        this.passwordField  = page.locator('#password');
        this.loginButton    = page.locator('#login-button');
    }
}