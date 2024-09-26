const express = require("express");
const {
  updateAdmin,
  deleteAdmin,
  getAdmin,
  getAllAdmins,
} = require("../controllers/adminControlers");
const {
  verifyToken,
  verifyAdmin,
} = require("../middleware/verifyToken");


const {
  registerAdmin,
  authAdmin,
  getAllUsers,
} = require("../controllers/adminControlers");

const { protect } = require("../middleware/verifyToken");

const router = express.Router();

// Admin-specific authentication check
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.status(200).json({ message: "Admin Authenticated" });
});    

// Admin verification check
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res
    .status(200)
    .json({ message: "Hello Admin, You are logged in, and you can perform this action" });
});

// Admin Registration Route
router.route("/register").post(registerAdmin);

// Admin Login Route
router.route("/login").post(authAdmin);

// Update Admin Profile
router.put("/:id", verifyAdmin, updateAdmin);

// Delete Admin Profile
router.delete("/:id", verifyAdmin, deleteAdmin);

// Get Specific Admin by ID
router.get("/:id", verifyAdmin, getAdmin);

// Get All Admins
router.get("/", verifyAdmin, getAllAdmins);

// Get All Users (Admin Only)
router.get("/users", protect, getAllUsers);

module.exports = router;
