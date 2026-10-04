const LandingPage = 
{
  domain: 'https://www.saucedemo.com/',
};
const SitePaths =
{
    shop:               'inventory.html',
    cart:               'cart.html',
    itemPage:           'inventory-item.html',
    checkoutInfo:       'checkout-step-one.html',
    checkoutOverview:   'checkout-step-two.html',
    checkoutComplete:   'checkout-complete.html'
};
const Queries =
{
    bikeLight:  '?id=0',
    boltShirt:  '?id=1',
    onesie:     '?id=2',
    testShirt:  '?id=3',
    backpack:   '?id=4',
    fleece:     '?id=5'
};
const Urls =
{
    login:              LandingPage.domain,
    shop:               LandingPage.domain + SitePaths.shop,
    cart:               LandingPage.domain + SitePaths.cart,
    itemPage:           LandingPage.domain + SitePaths.itemPage,
    checkoutInfo:       LandingPage.domain + SitePaths.checkoutInfo,
    checkoutOverview:   LandingPage.domain + SitePaths.checkoutOverview,
    checkoutComplete:   LandingPage.domain + SitePaths.checkoutComplete,
    bikeLight:          LandingPage.domain + SitePaths.itemPage + Queries.bikeLight,
    boltShirt:          LandingPage.domain + SitePaths.itemPage + Queries.boltShirt,
    onesie:             LandingPage.domain + SitePaths.itemPage + Queries.onesie,
    testShirt:          LandingPage.domain + SitePaths.itemPage + Queries.testShirt,
    backpack:           LandingPage.domain + SitePaths.itemPage + Queries.backpack,
    fleece:             LandingPage.domain + SitePaths.itemPage + Queries.fleece,
};
module.exports = {LandingPage, SitePaths, Queries, Urls};