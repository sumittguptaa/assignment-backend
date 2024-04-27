// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const AdminController = require("../../controllers/userController/userController");

router.get("/admin/dashboard", adminAuth, AdminController.adminDashboard);

module.exports = router;
