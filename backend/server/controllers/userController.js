const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../confiq");

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Creates a new user account. Requires the following fields:
// email: The user's email address
// password: The user's password
// role: The user's role (user or admin

exports.signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      email,
      password: hashedPassword,
      role: role || "user",
    });
    const accessToken = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    newUser.accessToken = accessToken;
    await newUser.save();
    res.json({
      data: newUser,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Logs in to an existing user account. Requires the following fields:

// email: The user's email address
// password: The user's password

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) throw new Error("Email does not exist");

    const validPassword = await validatePassword(password, user.password);

    if (!validPassword) throw new Error("Password is not correct");

    const accessToken = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    await User.findByIdAndUpdate(user._id, { accessToken });

    res.status(200).json({
      data: { email: user.email, role: user.role },
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Logged in user will get all the list of the users

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    data: users,
  });
};

// Admin will be able to delete the user on base of user id
// User id is required

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      data: null,
      message: "User has been deleted",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
