import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Hello, U2/i)).toBeVisible();
});
