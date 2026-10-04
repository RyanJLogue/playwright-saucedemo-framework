import { Urls } from "../data/links";

export default class NavigateTo
{
    constructor(page)
    {
        this.page = page;
    }

    async landingPage() 
    {
        await this.page.goto(Urls.login);
    }
    async shop() 
    {
        await this.page.goto(Urls.shop);
    }
    async cart() 
    {
        await this.page.goto(Urls.cart);
    }
    async checkoutInfo() 
    {
        await this.page.goto(Urls.checkoutInfo);
    }
    async checkoutOverview() 
    {
        await this.page.goto(Urls.checkoutOverview);
    }
    async checkoutComplete() 
    {
        await this.page.goto(Urls.checkoutComplete);
    }
    async itemPage() 
    {
        await this.page.goto(Urls.itemPage);
    }
    async bikeLight() 
    {
        await this.page.goto(Urls.bikeLight);
    }
    async boltShirt() 
    {
        await this.page.goto(Urls.boltShirt);
    }
    async onesie() 
    {
        await this.page.goto(Urls.onesie);
    }
    async testShirt() 
    {
        await this.page.goto(Urls.testShirt);
    }
    async backpack() 
    {
        await this.page.goto(Urls.backpack);
    }
    async fleece() 
    {
        await this.page.goto(Urls.fleece);
    }
}