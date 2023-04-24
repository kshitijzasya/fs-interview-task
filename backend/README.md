# Node.js Role-Based Access Control Server

This project is a Node.js server that implements role-based access control using the accesscontrol library. There are two roles: user and admin. Users can only access certain routes if they have the correct role.

# Getting Started

- Install dependencies by running npm install or yarn install.
- Create a .env file at the root of the project as same as env.example
- Start the development server by running

```
 npm start
 yarn start
```

# Overview

In this project, Mongoose is used to store user data such as email addresses, passwords, and roles. Access Control is then used to give us role-based access control so that we may read, write, and perform other operations.

# Dependencies

This project uses the following dependencies:

- accesscontrol -
  used to restrict access to resources based on defined roles and permissions.
- bcrypt -
  used to secure password hashing using a combination of salt and cost factor.
- cors - running on one domain to access resources from another domain in a secure manner.
- dotenv - allowing to load environment variables from a .env file into process.env
- express - using HTTP utility methods and middleware functions.

- jsonwebtoken - used for securely transmitting information between parties, typically used for user authentication and authorization
- mongoose - used for a schema-based solution for modeling application data and enforcing data validation, making it easier to work with MongoDB databases

# Routes

- Sign Up
  POST /signup

- Log In
  POST /login

- Users List
  GET /users

- Private Routes
  DELETE /user/:userId

# Contributing

If you would like to contribute to this project, please submit a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
