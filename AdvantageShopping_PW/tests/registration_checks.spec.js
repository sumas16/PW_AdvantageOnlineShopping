import test from "@playwright/test";
import { CommonPages } from "../pages/commonPages";
import { Helper } from "../utils/Helper";

var url = process.env.url;
let commonPages, helper;
let name;


test.describe("Registration ppage tests", async () => {


    test.beforeAll(async () => {
        helper = new Helper();
        name = helper.generateRandomString(5);
    })

    test.beforeEach(async ({ page }) => {
        commonPages = new CommonPages(page);

    });



    test("Validate regsitration page ", { tag: ['@tc01', '@regression', '@live', '@chrome'] }, async ({ }) => {

        await test.step("Given I open advantage shopping website", async () => {
            //write the function name and perform steps in its respective pages
            await commonPages.openSite(url);

        });

        await test.step("When I provide the right credentials to register", async () => {


            await commonPages.navigateToRegister();
            await commonPages.registrationPage.registerUser(name);
        });

        await test.step("Then validate if you are sugccessfully regsitered", async () => {
            await commonPages.validateLogin();
        });

    });

    test("Validate regsitration page failure scenario ", { tag: ['@tc01', '@regression', '@live', '@chrome'] }, async ({ }) => {

        await test.step("Given I open advantage shopping website", async () => {
            //write the function name and perform steps in its respective pages
            await commonPages.openSite(url);

        });

        await test.step("When I provide the existing credentials to register", async () => {
            await commonPages.navigateToRegister();
            await commonPages.registrationPage.registerUser(name);
        });

        await test.step("Then validate if existing user message appears", async () => {
            await commonPages.registrationPage.validateExistingUserErrorMsg();
        });

    });

    test("Validate username exceeding 15 chars error msg ", { tag: ['@tc01', '@regression', '@live', '@chrome'] }, async ({ }) => {

        await test.step("Given I open advantage shopping website", async () => {
            //write the function name and perform steps in its respective pages
            await commonPages.openSite(url);

        });

        await test.step("When I provide the right credentials to register", async () => {


            await commonPages.navigateToRegister();
            name = helper.generateRandomString(16);
            await commonPages.registrationPage.registerUser(name);
        });

        await test.step("Then validate if you are sugccessfully regsitered", async () => {
            await commonPages.registrationPage.validateUserNameCharlimit();
        });

    });
})




