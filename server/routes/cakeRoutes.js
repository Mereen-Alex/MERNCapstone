import express from "express";
const router = express.Router();
import {
  getCakes,
  getCakeById,
  createCake,
  updateCake,
  deleteCake,
} from "../controllers/cakeController.js";

router.get("/", getCakes); //  /api/cakes
router.get("/:id", getCakeById); //  /api/cakes/:id
router.post("/", createCake); //  /api/cakes
router.put("/:id", updateCake); //  /api/cakes/:id
router.delete("/:id", deleteCake); //  /api/cakes/:id

export default router;
