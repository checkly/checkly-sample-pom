import { expect, Locator, Page } from '@playwright/test';

export class DanubeCheckoutPage {
	readonly page: Page;
	readonly buyButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.buyButton = page.locator('.call-to-action').last();
	}

	async completeOrderForm() {
		await this.page.locator('#s-name').type('Max');
		await this.page.locator('#s-surname').type('Mustermann');
		await this.page.locator('#s-address').type('Charlottenstr. 57');
		await this.page.locator('#s-zipcode').type('10117');
		await this.page.locator('#s-city').type('Berlin');
		await this.page.locator('#s-company').type('Firma GmbH');
		await this.page.locator('.checkout > form').click();
		await this.page.locator('#asap').click();
	}

	async finalizeOrder() {
		await this.buyButton.click();
	}

	async successMessageIsShown() {
		return this.page.getByText('order is on the way').isVisible();
	}
}
