import { expect } from "@playwright/test";

export class TabletsPage {
    constructor(page) {
        this.page = page;
        this.buyNowButton = page.locator('[name="buy_now"]');
        this.addToCartButton = page.locator('[name="save_to_cart"]');
        this.checkOutButton = page.locator('[id="checkOutButton"]');
        this.menuCartButton = page.locator('#menuCart');
        this.orderSummarySection = page.locator('#userCart');
    }

    async addTabletToCart(){
        await this.page.waitForLoadState("load");
        await this.buyNowButton.click();
        await this.addToCartButton.click();
        await this.menuCartButton.click();
        await expect(this.checkOutButton).toBeVisible();
        
    }
}