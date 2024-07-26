import express from 'express';

import {
  updateLastReading
} from "../controllers/reading.controller.js";

const router = express.Router();

router.put("/:id", updateLastReading);

export default router;
