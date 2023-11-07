import Descope from "@descope/node-sdk";
import { chromium, type FullConfig } from "@playwright/test";
import * as crypto from "crypto";

require("dotenv").config();

export const authFile = "playwright/.auth/user.json";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const testUser = crypto.randomBytes(20).toString("hex");
  process.env.TEST_USER = testUser;

  const descope = Descope({
    projectId: process.env.REACT_APP_DESCOPE_PROJECT_ID,
    managementKey: process.env.DESCOPE_MANAGEMENT_KEY,
  });

  await descope.management.user.createTestUser(testUser, "test@test.test");
  const magiclink = await descope.management.user.generateMagicLinkForTestUser(
    "email",
    testUser,
    "https://test.local"
  );
  const token = magiclink.data.link.split("?t=")[1];
  const auth = await descope.magicLink.verify(token);

  await page.goto(config.projects[0].use.baseURL);
  await page.evaluate(
    ([ds, dsr]) => {
      window.localStorage.setItem("DS", ds);
      window.localStorage.setItem("DSR", dsr);
    },
    [auth.data.sessionJwt, auth.data?.refreshJwt]
  );

  await page.context().storageState({ path: authFile });
  await browser.close();
}

export default globalSetup;
