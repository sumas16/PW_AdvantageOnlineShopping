import { RegistrationPage } from "./RegistrationPage";
import { expect } from "@playwright/test"
import { TabletsPage } from "./TabletsPage";
import { OrderSummaryPage } from "./OrderSummaryPage";

export class CommonPages {

    //constructor to initialize locators and to have page objects
    constructor(page) {
        this.page = page;
        this.registrationPage = new RegistrationPage(page);
        this.tabletsPage = new TabletsPage(page);
        this.orderSummaryPage = new OrderSummaryPage(page);

        this.menuUser = page.locator("#menuUser");
        this.createAccountButton = page.locator('[translate="CREATE_NEW_ACCOUNT"]');
        this.registerPage = page.locator("#registerPage");

        //login locators
        this.userNameField = page.locator('[name="username"]');
        this.passwordField = page.locator('[name="password"]');
        this.signInButton = page.locator('#sign_in_btn');
        this.userIcon = page.locator('.hi-user.containMiniTitle.ng-binding');

        //tablet locator
        this.tabletTab = page.locator("#tabletsTxt");
        this.tabletHeader = page.locator('h3')

    }

    //open the website

    async openSite(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }

//registration page navigation function
    async navigateToRegister() {
        await this.menuUser.click(); // menu user button
        await this.createAccountButton.click();
        await expect(this.registerPage).toBeVisible();
    }

    async navigateToTabletPage() {
        await this.tabletTab.click();

    }

    //login script
    async login(userName, password) {
        await this.menuUser.click();
        await this.userNameField.fill(userName);
        await this.passwordField.fill(password);
        this.signInButton.click();

    }

    //validate if login is successful
    async validateLogin() {
        await this.menuUser.click();
        await expect(this.userIcon).toBeVisible();

    }


}