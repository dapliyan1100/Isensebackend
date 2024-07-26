import express from 'express';
import {
  getUserContacts,
  getUsers
} from "../controllers/user.controller.js";

const router = express.Router();
router.get("/:id", getUserContacts);
// router.get("/search/:id", verifyToken, getUser);
// router.put("/:id", updateUser);
// router.post("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default router;
