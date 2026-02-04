import Descope from "@descope/node-sdk";
import { type FullConfig } from "@playwright/test";
require("dotenv").config();

async function globalTeardown(config: FullConfig) {
  const projectId = process.env.REACT_APP_DESCOPE_PROJECT_ID;
  const managementKey = process.env.DESCOPE_MANAGEMENT_KEY;
  const testUser = process.env.TEST_USER;

  if (!projectId) {
    throw new Error("REACT_APP_DESCOPE_PROJECT_ID environment variable is required");
  }
  if (!managementKey) {
    throw new Error("DESCOPE_MANAGEMENT_KEY environment variable is required");
  }
  if (!testUser) {
    throw new Error("TEST_USER environment variable is required");
  }

  const descope = Descope({
    projectId,
    managementKey,
  });
  await descope.management.user.delete(testUser);
}

export default globalTeardown;
