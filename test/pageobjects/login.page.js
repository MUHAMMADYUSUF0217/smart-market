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