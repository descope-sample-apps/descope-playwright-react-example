# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

### Install Dependencies

First install the dependencies by running `yarn install`

### Setup Environment Variables

Capture your project ID from the [Project Settings Page](https://app.descope.com/settings/project)

Then create a Management key if you do not currently have one [here](https://app.descope.com/settings/company/managementkeys).

When you create the management key, ensure it is associated with the project you are testing with.

Then set your environment variables within a .env file at the root of the directory:
```
REACT_APP_DESCOPE_PROJECT_ID="YOUR PROJECT ID" // Required for Descope authentication
REACT_APP_DESCOPE_SIGN_IN_FLOW_ID="sign-up-or-in" // Optional, if you would like to use a flow other than sign-up-or-in
DESCOPE_MANAGEMENT_KEY="YOUR MANAGEMENT KEY" // Optional, if you would like to run E2E tests
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
