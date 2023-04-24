# React Login/Signup with Role-Based Access Control

This project is a React application that allows users to log in with role-based access control. There are two roles: user and admin. Users can only access view of user list but admin can also delete it.

# Getting Started

- Clone this repository to your local machine.
- Install dependencies by running npm install or yarn install.
- Create a .env file at the root of the project as same as env.example
- Start the development server by running npm start or yarn start.

# Features

- Sign Up
  Users can create a new account by providing their email and password. Upon successful account creation, the user will be redirected to the login page.

- Log In
  Users can log in to their account by providing their email and password. Upon successful login, the user will be redirected to the list page of all the users.

Only admin will be able to delete the user list and user will only have permission to read them.

# Dependencies

This project uses the following dependencies:

- react
- react-dom
- react-router-dom
- react-toastify
- js-cookie
- axios

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
