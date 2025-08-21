import {test, expect} from "@playwright/test";



// Entire test with variables, function in one place
test("Registration validation", async ({page}) =>{

    await page.goto("https://www.advantageonlineshopping.com/");

    await page.click("#menuUser"); // menu user button

    await page.locator('[translate="CREATE_NEW_ACCOUNT"]').click();

    await expect(page.locator("#registerPage")).toBeVisible();

    let usernameField = page.locator('[name="usernameRegisterPage"]');

    let emailField= page.locator('[name="emailRegisterPage"]');

    let passwordField = page.locator('[name="passwordRegisterPage"]');

    let confirmPasswordField = page.locator('[name="confirm_passwordRegisterPage"]');

    let promotionCheckbox= page.locator('[name="allowOffersPromotion"]');

    let agreeCheckbox = page.locator('[name="i_agree"]');

    let registerButton = page.locator('#register_btn');

    let errorMsg = page.getByText("User name already exists");

    let userIcon= page.locator('.hi-user.containMiniTitle.ng-binding');


    await usernameField.fill("Ak57aa");

    await emailField.fill("aksha@yopmail.com");

    await passwordField.fill("Password123");

    await confirmPasswordField.fill("Password123");

    await promotionCheckbox.click();

    await agreeCheckbox.click();

    await registerButton.click();

    await page.waitForLoadState("load");

    await page.click("#menuUser");

    await expect(userIcon).toBeVisible();



});

