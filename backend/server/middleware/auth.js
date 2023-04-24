const jwt = require("jsonwebtoken");
const { JWT_EXPIRY_TIME, JWT_SECRET } = require("../confiq");
const User = require("../models/userModel");

module.exports = async function (req, res, next) {
  if (req.headers.authorization) {
    const authorization = req.headers.authorization;

    const accessToken = authorization.split(" ")[1];
    const { userId, exp } = await jwt.verify(accessToken, JWT_SECRET);
    // Check if token has expired
    if (exp < JWT_EXPIRY_TIME) {
      return res.status(401).json({
        error: "JWT token has expired, please login to obtain a new one",
      });
    }
    res.locals.loggedInUser = await User.findById(userId);
    next();
  } else {
    next();
  }
};
