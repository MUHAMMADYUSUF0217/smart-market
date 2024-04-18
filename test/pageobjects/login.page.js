export class LoginPage {
    get signinButton() { return $('#loginBtn'); }
    get usernameField() { return $('#id-username'); }
    get passwordField() { return $('#password-auth-password'); }
    get loginButton() { return $('#set-login'); }
    get submitButton() { return $('#login-auth'); }

    async open() {
        await browser.url('https://dev.smart-market.uz/');
        await browser.maximizeWindow();
    }

    async login(username, password) {
        await this.signinButton.click();
        await browser.pause(1000);
        await this.loginButton.click();
        await this.usernameField.waitForDisplayed({ timeout: 3000 });
        await this.passwordField.waitForDisplayed({ timeout: 3000 });
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await browser.pause(1000);
        await this.submitButton.click();
    }
}

export class CatalogPage {
    get catalogButton() { return $('#category-btn'); }
    get menuLink() { return $('=БЫТОВАЯ ТЕХНИКА'); }
    get productCard() { return $('#product-card'); }

    async navigateToAppliances() {
        await this.catalogButton.click();
        await browser.pause(2000);
        await this.menuLink.click();
        await browser.pause(2000);
        await this.productCard.waitForExist({ timeout: 20000 });
        await this.productCard.click();
        await browser.pause(5000);
    }
}

export class ProductPage {
    get addToCartButton() { return $("#prod-id-add-card"); }

    async addToCart() {
        await this.addToCartButton.waitForClickable({ timeout: 15000 });
        await this.addToCartButton.click();
        await browser.pause(5000);
    }
}

export class CheckoutPage {
    get paymentButton() { return $("#SetCash"); }
    get buyButton() { return $("#Checkout_pay"); }

    async completePurchase() {
        await this.paymentButton.waitForExist({ timeout: 5000 });
        await this.paymentButton.click();
        await browser.pause(5000);
        await this.buyButton.waitForClickable({ timeout: 5000 });
        await this.buyButton.click();
        await browser.pause(5000);
    }
}

