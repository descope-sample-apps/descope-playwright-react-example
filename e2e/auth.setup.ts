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

  const projectId = process.env.REACT_APP_DESCOPE_PROJECT_ID;
  const managementKey = process.env.DESCOPE_MANAGEMENT_KEY;

  if (!projectId) {
    throw new Error("REACT_APP_DESCOPE_PROJECT_ID environment variable is required");
  }
  if (!managementKey) {
    throw new Error("DESCOPE_MANAGEMENT_KEY environment variable is required");
  }

  const descope = Descope({
    projectId,
    managementKey,
  });

  await descope.management.user.createTestUser(testUser, "test@test.test");
  const magiclink = await descope.management.user.generateMagicLinkForTestUser(
    "email",
    testUser,
    "https://test.local"
  );
  
  if (!magiclink.data?.link) {
    throw new Error("Failed to generate magic link for test user");
  }
  
  const token = magiclink.data.link.split("?t=")[1];
  const auth = await descope.magicLink.verify(token);

  if (!auth.data?.sessionJwt) {
    throw new Error("Failed to verify magic link and obtain session JWT");
  }

  const baseURL = config.projects[0].use.baseURL;
  if (!baseURL) {
    throw new Error("Base URL is not configured in Playwright config");
  }

  await page.goto(baseURL);
  const sessionJwt = auth.data.sessionJwt;
  const refreshJwt = auth.data.refreshJwt || undefined;
  await page.evaluate(
    ([ds, dsr]: [string, string | undefined]) => {
      window.localStorage.setItem("DS", ds);
      if (dsr) {
        window.localStorage.setItem("DSR", dsr);
      }
    },
    [sessionJwt, refreshJwt] as [string, string | undefined]
  );

  await page.context().storageState({ path: authFile });
  await browser.close();
}

export default globalSetup;
