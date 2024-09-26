const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcryptjs");

// Admin Registration
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, pic, country, mobile } = req.body;

  // Validate all required fields
  if (!name || !email || !password || !country || !mobile) {
    res.status(400);
    throw new Error("Please enter all required fields");
  }

  // Check if the admin already exists
  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  // Hash the password before saving the admin
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new admin
  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword, // Save hashed password
    pic,
    country,
    mobile,
  });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      country: admin.country,
      mobile: admin.mobile,
      pic: admin.pic,
      token: generateToken(admin._id), // Generate token for admin
    });
  } else {
    res.status(400);
    throw new Error("Admin registration failed");
  }
});

// Admin Authentication (Login)
const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
//   console.log({email});
  // Find admin by email
  const admin = await Admin.findOne({ email });

  // Check if admin exists and password matches
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      country: admin.country,
      mobile: admin.mobile,
      pic: admin.pic,
      token: generateToken(admin._id), // Generate token for admin
    });
  } else {
    res.status(401); 
    throw new Error("Invalid Email or Password");
  }  
});

// Get All Users (For Admin Dashboard)
const getAllUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? { 
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  // Find all users except the admin making the request
  const users = await Admin.find(keyword).find({ _id: { $ne: req.admin._id } });

  res.json(users);
});

// Get Single Admin by ID
const getAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (admin) {
    res.json(admin);
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

// Update Admin Profile
const updateAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (admin) {
    admin.name = req.body.name || admin.name;
    admin.email = req.body.email || admin.email;
    admin.pic = req.body.pic || admin.pic;
    admin.country = req.body.country || admin.country;
    admin.mobile = req.body.mobile || admin.mobile;

    if (req.body.password) {
      // If password is being updated, hash it before saving
      admin.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedAdmin = await admin.save();

    res.json({
      _id: updatedAdmin._id,
      name: updatedAdmin.name,
      email: updatedAdmin.email,
      pic: updatedAdmin.pic,
      country: updatedAdmin.country,
      mobile: updatedAdmin.mobile,
      isAdmin: updatedAdmin.isAdmin,
      token: generateToken(updatedAdmin._id),
    });
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

// Delete Admin
const deleteAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (admin) {
    await admin.remove();
    res.json({ message: "Admin deleted successfully" });
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

// Get All Admins (Optional if needed for internal management)
const getAllAdmins = asyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
});

module.exports = {
  registerAdmin,
  authAdmin,
  getAllUsers,
  getAdmin,
  updateAdmin,
  deleteAdmin,
  getAllAdmins,
};
