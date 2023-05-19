import { test, expect } from '@playwright/test';
import { DanubeShopPage } from './pages/shop';
import { DanubeItemDetailsPage } from './pages/itemDetails';
import { DanubeCartPage } from './pages/cart';
import { DanubeCheckoutPage } from './pages/checkout';

test('checkout', async ({ page }) => {
	const navigationPromise = page.waitForNavigation();

	// navigate to our target web page
	await page.goto('https://danube-web.shop');

	// add the first item to the cart
	// await page.click(`.preview:nth-child(1) > .preview-author`);
	const shopPage = new DanubeShopPage(page);
	const itemDetailsPage = new DanubeItemDetailsPage(page);
	const cartPage = new DanubeCartPage(page);
	const checkoutPage = new DanubeCheckoutPage(page);

	await shopPage.selectShopItem();
	await itemDetailsPage.addToCart();
	// await shopPage.goto();

	// wait until navigation is complete
	await navigationPromise;

	// navigate to cart and proceed
	await cartPage.proceedToCheckout();
	await checkoutPage.completeOrderForm();
	await checkoutPage.finalizeOrder();

	expect(await checkoutPage.successMessageIsShown());

});
