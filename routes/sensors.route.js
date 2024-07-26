import express from "express";
import {
  getSensors,
  getSensorbyId,
  createSensor
} from "../controllers/sensor.controller.js";
const router = express.Router();

// Route for Save a new Sensor
router.get("/", getSensors);
router.get("/:id", getSensorbyId);
router.post("/", createSensor);
// router.post("/:id", updateUser);
// router.delete("/:id", deleteUser);
export default router;
