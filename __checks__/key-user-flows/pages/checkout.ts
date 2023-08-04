import { expect, Locator, Page } from '@playwright/test';

export class DanubeCheckoutPage {
	readonly page: Page;
	readonly buttonBuy: Locator;
	readonly fieldName: Locator;
	readonly fieldSurname: Locator;
	readonly fieldAddress: Locator;
	readonly fieldZipCode: Locator;
	readonly fieldCity: Locator;
	readonly fieldCompany: Locator;
	readonly optionAsap: Locator;

	constructor(page: Page) {
		this.page = page;
		this.buttonBuy = page.locator('.call-to-action').last();
		this.fieldName = page.locator('#s-name');
		this.fieldSurname = page.locator('#s-surname')
		this.fieldAddress = page.locator('#s-address')
		this.fieldZipCode = page.locator('#s-zipcode')
		this.fieldCity = page.locator('#s-city')
		this.fieldCompany = page.locator('#s-company')
		this.optionAsap = page.locator('#asap')
	}

	async completeOrderForm(user) {
		await this.fieldName.type(user.name);
		await this.fieldSurname.type(user.name);
		await this.fieldAddress.type(user.name);
		await this.fieldZipCode.type(user.name);
		await this.fieldCity.type(user.name);
		await this.fieldCompany.type(user.name);
		await this.optionAsap.click()
	}
	
	async finalizeOrder() {
		await this.buttonBuy.click();
	}

	async successMessageIsShown() {
		return this.page.getByText('order is on the way').isVisible();
	}
}
