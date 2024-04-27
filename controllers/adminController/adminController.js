// controllers/UserController.js
const User = require("../../models/user/user");
const jwt = require("jsonwebtoken");

exports.adminDashboard = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find({}, "name email count gender lastLoginDate");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
