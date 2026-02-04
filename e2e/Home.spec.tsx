import { expect, test } from "@playwright/test";

test("should display authenticated user greeting", async ({ page }) => {
  await page.goto("/");
  // Wait for loading to complete (not showing "Loading..")
  await expect(page.getByText(/Loading\.\./i)).not.toBeVisible({ timeout: 10000 });
  // Verify that the greeting with user ID is visible (authenticated state)
  await expect(page.getByText(/Hello, /i)).toBeVisible();
  // Verify that we're showing the welcome message
  await expect(page.getByText(/Welcome to my app!/i)).toBeVisible();
});
