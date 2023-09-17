# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Documentation

Introduction

Welcome to BAKE Street, the Online Cake Ordering Website documentation. This website is designed to help you learn full-stack development using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides a simplified online cake ordering experience with simulated payments. This documentation will guide you through the setup and usage of the website.

Table of Contents

1. Getting Started
    Prerequisites
    Installation
    Running the Application

2. User Features
     User authentication
     Browsing Cakes
     Adding Cakes to Cart
     Managing the Cart
     Simulated Checkout

3. Components Overview
     Frontend Components
     Backend Components

 1. Getting Started

  Prerequisites
  Before you begin, ensure you have the following prerequisites installed on your system:

  Node.js and npm (Node Package Manager)
  MongoDB

  2. User Features

  User authentication:
  User authentication is implemented using JSON Web Tokens (JWT) and cookies. JWT tokens are generated on the server after a successful login and stored in an HTTP-only secure cookie. Logout functionality will remove the `token` cookie from your browser.

  Checking User Authentication
  To check if a user is authenticated, follow the steps:

  Inspect Browser Cookies

   Open your web browser's developer tools and navigate to the "Application" or "Storage" tab, depending on your browser. Look for the cookies associated with your application's domain. You should see a cookie named token. 

   As a demo, use the following email and password.
    email: ivy@parkvill.com  password: ivy25pa!2

    Browsing Cakes
   . Upon visiting the website, users can browse a variety of cakes.
   . Cakes are categorized, and users can filter cakes by categories or search for specific cakes.
   . Clicking on a cake displays its details, including description, available sizes, and price.

    Adding Cakes to Cart
   . Users can add cakes to their shopping cart by selecting a size and clicking the "Add to Cart" button on the cake detail page.
   . The cart icon in the navigation bar displays the number of items in the cart.

   Managing the Cart
   . Clicking on the cart icon in the navigation bar opens the cart page.
   . Users can view the items in their cart, update quantities, and remove items.
   . The total cost of items in the cart is displayed.

   Simulated Checkout
   . Users can proceed to checkout from the cart page.
   . They provide their information, shipping, and billing addresses.                                                             . Simulated payment information can be used (e.g., 4242 4242 4242 4242, any future date, any CVV).
   . After "payment," users receive an order confirmation.

   3. Components Overview

     Frontend Components
   . The frontend is built using React.js and includes components for navigation, cake listing, cart management, and order processing.

     Backend Components
   . The backend is powered by Express.js and Node.js, with data stored in MongoDB. Key backend components include APIs for user management, cake management, cart management. 

This documentation provides an overview of the Online Cake Ordering Website, its features, and how to get started with it for learning full-stack development using the MERN stack.