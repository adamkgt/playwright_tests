class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#email'); 
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginForm > button');
    this.successMessage = page.locator('#userEmail');

  }

  async goto() {
    await this.page.goto('https://adamkgt.github.io/QAApp/index.html');
  }

 async login(username, password) {
    if (!username || !password) {
      throw new Error('Username or password is undefined!');
    }

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    // klik i czekanie na przekierowanie
    await Promise.all([
      this.page.waitForNavigation({ url: '**/app.html' }),
      this.loginButton.click()
    ]);
  }

  async isLoggedIn() {

    return await this.navBar.isVisible();
  }
}

module.exports = { LoginPage };
