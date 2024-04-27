// routes/userRoutes.js
const express = require("express");
const router = express.Router();

const AdminController = require("../../controllers/adminController/adminController");
const adminAuth = require("../../middleware/authMiddleWare");
router.get("/admin/dashboard", adminAuth, AdminController.adminDashboard);

module.exports = router;
