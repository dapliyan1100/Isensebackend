import express from 'express';
import {
  getUsers
} from "../controllers/user.controller.js";

const router = express.Router();
router.get("/", getUsers);
// router.get("/search/:id", verifyToken, getUser);
// router.put("/:id", updateUser);
// router.post("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default router;
