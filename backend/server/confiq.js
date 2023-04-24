const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

module.exports = {
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY_TIME: Date.now().valueOf() / 1000,
};
