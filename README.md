<img width="1400" alt="Screenshot 2024-04-01 at 1 18 04 PM" src="https://github.com/descope-sample-apps/descope-playwright-react-example/assets/32936811/9f39fcac-1cf5-402b-a10e-477f4b9a4351">

---

# Playwright / React Sample App with Descope

This sample app demonstrates the integration of Descope authentication within a web application tested using Playwright's end-to-end testing capabilities. The app allows users to log in, and once authenticated, displays the user ID. It includes e2e tests to create a test user with the Descope Management SDK.

## Table of Contents 📝

1. [Installation](#installation)
2. [Setting Up Testing Environment](#setting-up-testing-environment)
3. [Running the Application](#running-the-application)
4. [Running Tests](#running-tests)
5. [Contributing](#contributing)
6. [Issue Reporting](#issue-reporting)
7. [License](#license)

## Installation 💿

To get started with this app, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/playwright-descope-sample-app.git
cd playwright-descope-sample-app
npm install
```

## Setting Up Testing Environment 🌐

Before running the tests, ensure that you have set up your environment variables correctly by following these steps:

1. Get your Project ID from the [Project Settings Page](https://app.descope.com/settings/project)

2. Then, create a Management key if you do not currently have one [here](https://app.descope.com/settings/company/managementkeys).

> **NOTE:** When you create the management key, ensure it is associated with the project you are testing with.

3. Set your environment variables within a .env file at the root of the directory (you can use the `.env.example` file):

```
REACT_APP_DESCOPE_PROJECT_ID="YOUR PROJECT ID" // Required for Descope authentication
REACT_APP_DESCOPE_SIGN_IN_FLOW_ID="sign-up-or-in" // Optional, if you would like to use a flow other than sign-up-or-in
DESCOPE_MANAGEMENT_KEY="YOUR MANAGEMENT KEY" // Optional, if you would like to run E2E tests
PLAYWRIGHT_TEST_BASE_URL="Deployment Status Target URL" // For running e2e tests in deployed app (not localhost)
```

After this, you're ready to run the application, and also the playwright end-to-end tests.

## Running the Application 🚀

To run the app locally, execute:

```bash
npm start
```

Navigate to `http://localhost:3000/` to see the app in action.

## Running Tests 🧪

The e2e tests can be run using the following command:

```bash
npx playwright test
```

> **NOTE:** If you don't already have playwright installed, you'll need to install it using the following command: `npx playwright install`. If you're on a linux/mac system, you might also need to run `npx playwright install msedge` to run the Microsoft Edge tests locally, from the root user.

The test setup script uses the Descope SDK to create a test user and logs them in using a magic link to simulate authentication for testing purposes.

## Contributing 🤝

Contributions are welcome! Please feel free to submit a pull request with your improvements or bug fixes.

## Issue Reporting ⚠️

If you encounter any issues or have suggestions for improvements, please report them by opening an issue in this repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
