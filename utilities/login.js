import LocatorsLandingPage from "../pages/locatorsLandingPage";
import {    StandardUser, 
            LockedUser, 
            ProblemUser,
            PerformanceUser,
            ErrorUser,
            VisualUser 
        } from "../data/users";

async function login(landingPage, username, password)
{
    await landingPage.usernameField.fill(username);
    await landingPage.passwordField.fill(password);
    await landingPage.loginButton.click();
}

export default class LoginAsUser
{
    constructor(page)
    {
        this.page = page;
        this.landingPage = new LocatorsLandingPage(page);
    }

    async loginStandardUser()
    {
        await login(this.landingPage, StandardUser.username, StandardUser.password);
    }
    async loginLockedUser()
    {
        await Login(this.landingPage, LockedUser.username, LockedUser.password);
    }
    async loginProblemUser() 
    {
    await login(this.landingPage, ProblemUser.username, ProblemUser.password);
    }
    async loginPerformanceUser() 
    {
        await login(this.landingPage, PerformanceUser.username, PerformanceUser.password);
    }
    async loginErrorUser() 
    {
        await login(this.landingPage, ErrorUser.username, ErrorUser.password);
    }
    async loginVisualUser() 
    {
        await login(this.landingPage, VisualUser.username, VisualUser.password);
    }
}