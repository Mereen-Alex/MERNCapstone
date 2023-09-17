import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/register", registerUser); // /api/users
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.get("/", protect, getAllUsers);
router.get("/:id", protect, getUserById); // /api/users/:id

export default router;
