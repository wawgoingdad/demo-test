# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Styling system
This project using Bootstrap as core styling UI. Other, we can create more abstractions base on bootstrap layout, and even overrides on it in /src/styles folder.

### Application structure

/src
  /reducers
  /types
  /actions
  /hooks

  /components
    /YourComponent
      YourComponent.js
      YourComponent.module.scss
  /styles
    /abstracts
      _overrides.scss
    /base
      _overrides.scss
    /layout
      _header.scss
      _footer.scss
    /pages
      _login.scss
    /utils
      _mixins.scss
  index.scss
  App.tsx
index.tsx

### Naming convention
- Use PascalCase for React component files. Each component should be in its own file. Example: UserProfile.tsx, HeaderComponent.tsx
- Use camelCase for utility files.
- Use PascalCase and end with Types if it includes various types, or directly relate it to its use.
- Use camelCase and suffix with Actions. Example: actions/userActions.ts, actions/productActions.ts
- Use camelCase and suffix with Reducer.
- Use camelCase and start with use. Example: hooks/useAuthentication.ts

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
