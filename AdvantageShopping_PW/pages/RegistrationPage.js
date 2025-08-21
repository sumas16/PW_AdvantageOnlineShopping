import { expect } from "@playwright/test";

export class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('[name="usernameRegisterPage"]');
        this.emailField = page.locator('[name="emailRegisterPage"]');
        this.passwordField = page.locator('[name="passwordRegisterPage"]');

        this.confirmPasswordField = page.locator('[name="confirm_passwordRegisterPage"]');
        this.promotionCheckbox = page.locator('[name="allowOffersPromotion"]');
        this.agreeCheckbox = page.locator('[name="i_agree"]');
        this.registerButton = page.locator('#register_btn');

        this.existingUserErrorMsg = page.getByText("User name already exists");

        this.charLengtherrorMsg = page.getByText("Incorrect user name or password.");
       
    }


    // register the users in this function. takes data as their parameters
    async registerUser(name) {
        await this.usernameField.fill(name);
        await this.emailField.fill("aksha@yopmail.com");
        await this.passwordField.fill("Password123");
        await this.confirmPasswordField.fill("Password123");

        await this.promotionCheckbox.click();
        await this.agreeCheckbox.click();
        await this.registerButton.click();
        await this.page.waitForLoadState("load");
    }

    

    async validateExistingUserErrorMsg(){
        await expect(this.existingUserErrorMsg).toBeVisible();
    }

    async validateUserNameCharlimit(){
        await expect(this.charLengtherrorMsg).toBeVisible();
    }
}