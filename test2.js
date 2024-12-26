// Classes
class LoginPage {
    get usernameTxt() { return '.fake-username-class'; }
    get passwordTxt() { return '.fake-password-class'; }
    get loginBtn() { return '#fake-login-button'; }

    // Helper method that we can use to log in
    login(username, password) {
        console.log(`I'm typing my username ${username} to ${this.usernameTxt}`);
        console.log(`I'm typing my password ${password} to ${this.passwordTxt}`);
        console.log('Im clicking on ' + this.loginBtn);
    }
}

// Create instance of LoginPage
const page = new LoginPage();
