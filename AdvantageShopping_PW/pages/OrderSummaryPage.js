import { expect } from "@playwright/test";

export class OrderSummaryPage {
    constructor(page) {
        this.page = page; 
        this.removeButton = page.locator('[translate="REMOVE"]');
        this.shoppinCartHeader = page.locator('[id="shoppingCart"]');
    }

    async removeOrders(){
        let orders = await this.removeButton.elementHandles();

       for (const order of orders) {
            const text = await order.textContent();
           order.click();
        }

        await expect(this.shoppinCartHeader).toBeVisible();

    }


}