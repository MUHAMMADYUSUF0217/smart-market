import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
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