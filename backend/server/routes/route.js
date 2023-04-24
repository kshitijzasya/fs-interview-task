const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get(
  "/users",
  authController.allowIfLoggedin,
  authController.grantAccess("readAny", "profile"),
  userController.getUsers
);

router.delete(
  "/user/:userId",
  authController.allowIfLoggedin,
  authController.grantAccess("deleteAny", "profile"),
  userController.deleteUser
);

module.exports = router;
