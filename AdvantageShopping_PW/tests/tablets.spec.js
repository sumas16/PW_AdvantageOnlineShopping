import test from "@playwright/test";
import { CommonPages } from "../pages/commonPages";
let testData = JSON.parse(JSON.stringify(require("./testdata/data.json")));

var url = process.env.url;
let commonPages;


test.beforeEach(async ({ page }) => {
    commonPages = new CommonPages(page);
});

test("Validate tablets page", async ({ }) => {
    await test.step('Given I open Advantage online website', async () => {
        await commonPages.openSite(url);
    });

    await test.step('Login with valid credentials', async () => {
        await commonPages.login(testData.userName, testData.password);
        await commonPages.validateLogin();
    });

    await test.step('Add a Tablet to cart', async () => {
        await commonPages.navigateToTabletPage();
        await commonPages.tabletsPage.addTabletToCart();

    })

    await test.step('Remove items from cart', async () => {
        await commonPages.orderSummaryPage.removeOrders();
    })

});