# Namaste React 🚀

## Introduction

This project leverages the **Parcel** bundler for efficient builds and introduces a structured approach to building a scalable React application named **Namaste Food**. It explores concepts like React Hooks, Redux Toolkit, and modern testing practices to create a robust web application.

---

## Parcel Features

Parcel is a powerful bundler with several built-in features that make development faster and easier:

-   **Dev Build**: Automatically builds files for development.
-   **Local Server**: Includes a development server for real-time feedback.
-   **HMR (Hot Module Replacement)**: Automatically updates modules in the browser without refreshing.
-   **File Watching Algorithm**: Written in C++ for high performance.
-   **Caching**: Speeds up rebuilds by caching processed files.
-   **Image Optimization**: Automatically optimizes images for faster loading.
-   **Minification**: Reduces file sizes for production.
-   **Bundling**: Combines multiple files into a single optimized output.
-   **Compression**: Reduces the size of bundled files.
-   **Consistent Hashing**: Ensures consistent filenames for caching.
-   **Code Splitting**: Splits code into smaller chunks for optimized loading.
-   **Differential Bundling**: Provides support for older browsers.
-   **Diagnostic**: Helps identify and debug issues during development.
-   **Error Handling**: Simplifies error detection.
-   **HTTPS Support**: Easily configure HTTPS for local development.
-   **Tree Shaking**: Removes unused code from the final bundle.
-   **Different Dev and Prod Bundles**: Automatically generates separate bundles for development and production environments.

---

## Namaste Food Application Structure

```text
Header
  - Logo
  - Navigation Items
Body
  - Search Bar
  - RestaurantContainer
    - RestaurantCard
      - Image
      - Name, Star Rating, Cuisine, Delivery Time
Footer
  - Copyright
  - Links
  - Address
  - Contact Information
```

# 1. Export and Import in JavaScript

## 1.1 Default Export/Import

```javascript
// Export
export default Component;
// Import
import Component from "path";
```

## 1.2 Named Export/Import

```javascript
    // Export
    export const Component;
    // Import
    import { Component } from "path";
```

```test
## 2. React Hooks
    - React Hooks are powerful utility functions in React:
        1. useState(): For managing state variables in React.
        2. useEffect(): For handling side effects in functional components.

## 3. Web App Routing
    - Two types of routing commonly used in web applications:
        1. Client-Side Routing: Routes are handled on the client-side for a seamless user experience.
        2. Server-Side Routing: Routes are handled by the server, often requiring page reloads.

## 4. Redux Toolkit
    - Redux Toolkit simplifies state management in React applications:

    4.1 Steps to Set Up Redux Toolkit
        1. Install @reduxjs/toolkit and react-redux.
        2. Build a Store: Centralized state management.
        3. Connect Store to App: Use <Provider> to connect the store.
        4. Create Slices: Define slices of the state (e.g., cartSlice).
        5. Dispatch Actions: Trigger state updates using dispatch(action).
        6. Selectors: Extract specific pieces of state.

5. Testing in React
    5.1 Types of Testing
        1. Unit Testing: Test individual components or functions.
        2. Integration Testing: Test how components interact with each other.
        3. End-to-End (E2E) Testing: Simulate user interactions and test the entire app workflow.

    5.2 Setting Up Testing
        1. Install React Testing Library: Provides utilities for testing React components.
        2. Install Jest: JavaScript testing framework.
        3. Install Babel Dependencies: Required for JSX and ES6+ support.
        4. Configure Babel: Add presets and plugins for JSX.
        5. Disable Parcel Default Babel Transpilation: Update the Parcel config file.
        6. Jest Initialization: Run npx jest --init to set up Jest.
        7. Install jsdom: Simulate a DOM environment in Node.js.
        8. Install @babel/preset-react: Make JSX work in test cases.
        9. Update Babel Config: Add @babel/preset-react in your Babel configuration.
        10. Install @testing-library/jest-dom: Extend Jest with custom matchers for the DOM.

6. Conclusion
    This project serves as a comprehensive guide to building modern React applications with advanced tooling and best practices. Explore the features, learn the structure, and use the outlined steps to set up efficient testing environments.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  Reconciliation (Overall process to update the DOM)
      |
      |-- React Fiber (Manages scheduling and prioritization of updates)
      |   |
      |   |-- Diffing Algorithm (Compares old and new virtual DOMs to find changes)
      |
      |-- DOM Update (Applies changes to the real DOM)

  Explanation:
      Reconciliation: The parent process that determines how to update the UI efficiently.
      React Fiber: A system within reconciliation that splits the work into manageable chunks and prioritizes it.
      Diffing Algorithm: A component of Fiber that identifies changes between the old and new virtual DOM.
      DOM Update: The final result where the necessary changes are applied to the actual DOM.
```
