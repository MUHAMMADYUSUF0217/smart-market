import { LoginPage } from '../pageobjects/login.page.js';
import { CatalogPage } from '../pageobjects/login.page.js';
import { ProductPage } from '../pageobjects/login.page.js';
import { CheckoutPage } from '../pageobjects/login.page.js';

describe('Login Test for smart-market.uz', () => {
    it('should allow access with correct credentials', async () => {
        const loginPage = new LoginPage();
        const catalogPage = new CatalogPage();
        const productPage = new ProductPage();
        const checkoutPage = new CheckoutPage();

        await loginPage.open();
        await loginPage.login('user32501921060034', '123321');
        await catalogPage.navigateToAppliances();
        await productPage.addToCart();
        await checkoutPage.completePurchase();
    });
});

