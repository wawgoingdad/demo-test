# Getting Started

This project was bootstrapped with CRA with minimum setup, trying to avoid much boilerplate.
What I used in this:
- Bootstrap
- Redux
- TypeScript

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

### Deploy
Use Dockerfile place in this project to deploy on some cloud environment. Remember to config nginx for access sub-route directly.

### Styling system
This project using Bootstrap as core styling UI. Other, we can create more abstractions base on bootstrap layout, and even overrides on it in /src/styles folder.
Example. I've created abstracts/variables for override all default bootstrap variables, then we can reuse the variables without setting hard-corded application design.

### Application structure

- **`/src`**: Main source directory for all the application's code.
  - **`/actions`**: Contains Redux action creators, for application or global or common level actions
  - **`/components`**: Contains React components.
    - **`/YourComponent`**: A specific component directory; contains both the component's JavaScript and its associated SCSS module.
  - **`/hooks`**: Custom React hooks used throughout the application.
  - **`/pages`**: SCSS files specific to different pages in the application.
  - **`/reducers`**: Redux reducers managing state changes based on actions.
  - **`/middlewares`**: Place application level middlewares. For page/component specific, please create a subfolder for local middlewares
  - **`/styles`**: Global styles and SCSS partials organized into several subdirectories:
    - **`/abstracts`**: Override abstracts bootstrap variables here
    - **`/base`**: Override base styles for foundational layout and element styling
    - **`/layout`**: Custom styles specifically for layout components like headers and footers, body here
  - **`/types`**: TypeScript types and interfaces.
  - **`/utils`**: Utility functions and common helpers.
  - **`/__tests__`**: Unit tests here.
- **`App.tsx`**: The root React component that combines all page components.
- **`index.tsx`**: Entry point for the React application that renders the `App`.

### Naming convention
- Use PascalCase for React component files. Each component should be in its own file. Example: UserProfile.tsx, HeaderComponent.tsx
- Use camelCase for utility files.
- Use PascalCase and end with Types if it includes various types, or directly relate it to its use.
- Use camelCase and suffix with Actions. Example: actions/userActions.ts, actions/productActions.ts
- Use camelCase and suffix with Reducer.
- Use camelCase and start with use. Example: hooks/useAuthentication.ts

