import test, { expect } from "@playwright/test";

test("Anon users can access the home page", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h3").first()).toContainText("Nos catégories", { timeout: 30000 });
});

test("Anon users can access the product page", async ({ page }) => {
  // Fetch the first product
  // Navigate and get the response
  const response = await page.goto("/product/1");

  // Check if the response is successful
  expect(response?.status()).toBe(200);

  // Wait for the network to be idle
  await page.waitForLoadState("networkidle");

  const buttonsContainer = page.locator("#buttons");
  await expect(buttonsContainer).toBeVisible();
});

test("Anon users can filter products by category", async ({ page }) => {
  await page.goto("/categories/1");
  await expect(page.locator("#filter-button-sizes")).toBeVisible();
});

test("Size filter should show only products with selected size", async ({ page }) => {
  // Aller directement sur la page avec le filtre de taille
  await page.goto("/categories/1?sizes=45");

  // Attendre que la page soit chargée
  await page.waitForLoadState("networkidle");

  // Compter le nombre de produits affichés en utilisant la classe 'product'
  const products = page.locator(".product");

  // Vérifier qu'il n'y a qu'un seul produit
  await expect(products).toHaveCount(1);
});

test("Complete user journey through products and categories", async ({ page }) => {
  // Start from home page
  await page.goto("/");

  // Wait for products to be loaded
  await page.waitForLoadState("networkidle");

  // Wait for any product to be visible and get all products
  const productsContainer = page.locator(".product").first();
  await expect(productsContainer).toBeVisible();

  // Click the first product
  await productsContainer.click();

  // Wait for navigation to complete
  await page.waitForLoadState("networkidle");

  // Verify product page elements
  const buttonsContainer = page.locator("#buttons");
  await expect(buttonsContainer).toBeVisible();

  // Go back to previous page
  await page.goBack();
  await page.waitForLoadState("networkidle");

  // Find and click the Sneakers category
  const sneakersLink = page.locator("span[alt='Sneakers']");
  await sneakersLink.click();

  // Verify category page elements
  await expect(page.locator("#filter-button-sizes")).toBeVisible();
});
