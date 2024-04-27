// controllers/UserController.js
const User = require("../../models/user/user");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    // Create new user
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email and password
    const user = await User.findOne({ email, password });
    if (!user) throw new Error("Invalid email or password");
    user.lastLoginDate = Date.now();
    user.count += 1;

    await user.save();
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      "assignment",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Login successful",
      user: { name: user.name, gender: user.gender, email: user.email },
      token,
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
