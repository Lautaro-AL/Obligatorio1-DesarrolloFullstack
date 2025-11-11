import express from "express";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";
import {
  modificarRolPorUsername,
  obtenerPlanes,
} from "../controllers/user.controller.js";
const router = express.Router();

router.patch("/:username/:idPlan", modificarRolPorUsername);
router.get("/planes", obtenerPlanes);

export default router;
