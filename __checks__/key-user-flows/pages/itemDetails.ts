import { expect, Locator, Page } from '@playwright/test';

export class DanubeItemDetailsPage {
	readonly page: Page;
	readonly addToCartButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.addToCartButton = page.locator('text=add to cart');
	}

	async addToCart() {
		await this.addToCartButton.click();
	}

}
