import { expect, Locator, Page } from '@playwright/test';

export class DanubeShopPage {
	readonly page: Page;
	readonly shopItems: Locator;
	readonly shopSearchBar: Locator;
    readonly shopSearchButton: Locator;
    readonly logo: Locator;

	constructor(page: Page) {
		this.page = page;
		this.shopItems = page.locator('.preview > .preview-author');
		this.shopSearchBar = page.locator('input');
		this.shopSearchButton = page.locator('#button-search');
        this.logo = page.locator('#logo')
	}

	async selectShopItem() {
		await this.shopItems.first().click();
	}

	async performSearch(searchString: string) {
		await this.shopSearchBar.fill(searchString);
        await this.shopSearchButton.click();
	}

    async goto() {
        await this.logo.click()
    }
}
