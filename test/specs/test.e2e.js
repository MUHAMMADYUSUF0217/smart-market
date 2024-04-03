describe('Login Test for smart-market.uz', () => {
    it('should allow access with correct credentials', async () => {
        await browser.url('https://dev.smart-market.uz/');
        await browser.maximizeWindow();
        const signinBtn = await $('#loginBtn')
        await signinBtn.click();
        await browser.pause(1000);
        const loginBtn = await $("#set-login")
        await loginBtn.click();
        const username = await $('#id-username')
        const password = await $('#password-auth-password')
        username.waitForDisplayed({ timeout: 3000 });
        password.waitForDisplayed({ timeout: 3000 });
        await username.setValue('user32501921060034');
        await password.setValue('123321');
        await browser.pause(1000);
        const submitBtn = await $('#login-auth');
        
        await submitBtn.click();
        const catalog = await $('#category-btn')
        await catalog.click();
        await browser.pause(2000);
        const menu = await $('=БЫТОВАЯ ТЕХНИКА');
        await menu.click();
        await browser.pause(2000);
        const product = await $('#product-card');
        await product.waitForExist({ timeout: 20000 });
        await product.click();
        await browser.pause(5000);
        const oformitBtn = $("#prod-id-add-card");
        await oformitBtn.waitForClickable({timeout: 15000});
        await oformitBtn.click();
        await browser.pause(5000);
        const paymentBtn = await $("#SetCash");
        await paymentBtn.waitForExist({ timeout: 5000 });
        await paymentBtn.click();
        await browser.pause(5000);
        const buyBtn = await $("#Checkout_pay");
        await buyBtn.waitForClickable({timeout: 5000});
        await buyBtn.click();
        await browser.pause(5000);
    });
})