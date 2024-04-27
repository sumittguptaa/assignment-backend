// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.adminAuth = async (req, res, next) => {
  try {
    // Extract token from headers
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    // Verify token
    const decoded = jwt.verify(token, "assignment");
    // Check if user is admin
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }
    // Pass the user object to the request for further use
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
