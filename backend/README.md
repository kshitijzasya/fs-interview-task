# Node.js Role-Based Access Control Server

This project is a Node.js server that implements role-based access control using the accesscontrol library. There are two roles: user and admin. Users can only access certain routes if they have the correct role.

# Getting Started

Clone this repository to your local machine.
Install dependencies by running npm install or yarn install.
Create a .env file at the root of the project
Start the development server by running npm start or yarn start.

# Features

Sign Up
POST /signup

Creates a new user account. Requires a JSON body with the following fields:

email: The user's email address
password: The user's password
role: The user's role (user or admin)

Log In
POST /login

Logs in to an existing user account. Requires a JSON body with the following fields:

email: The user's email address
password: The user's password

Returns a JSON Web Token (JWT) that can be used to authenticate future requests

Users List
GET /users

Returns a JSON object with some basic information about the user's account, such as their email address and role. Only authenticated users with the user or admin role can access this route.

Private Routes
DELETE /user/:userId
Only admin has permission to access this route as it will delete the user

# Dependencies

This project uses the following dependencies:

accesscontrol
bcrypt
cors
dotenv
express
jsonwebtoken
mongoose

# Contributing

If you would like to contribute to this project, please submit a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
