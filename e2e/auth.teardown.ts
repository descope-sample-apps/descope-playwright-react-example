import Descope from "@descope/node-sdk";
import { type FullConfig } from "@playwright/test";
require("dotenv").config();

async function globalTeardown(config: FullConfig) {
  const descope = Descope({
    projectId: process.env.REACT_APP_DESCOPE_PROJECT_ID,
    managementKey: process.env.DESCOPE_MANAGEMENT_KEY,
  });
  await descope.management.user.delete(process.env.TEST_USER);
}

export default globalTeardown;
