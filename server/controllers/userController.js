import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

// POST:  /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashedpassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//  /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("Login Request Data:", req.body);

  const user = await User.findOne({ email });
  console.log("Retrieved User:", user);

  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("Password Matched!");

    const token = generateToken(user);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development", // means production: true
      sameSite: "strict",
      expires: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), // 20 days
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: token,
    });
  } else {
    console.log("Password Mismatch!");
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//  POST: /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("jwt");

  res.status(200).json({ message: "User logged out" });
});

// /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  };

  res.status(200).json(user);
});

// /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @Admin
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
};
