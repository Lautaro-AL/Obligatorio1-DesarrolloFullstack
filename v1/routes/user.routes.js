import express from "express";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";
import {
  modificarRolPorId,
  obtenerPlanes,
} from "../controllers/user.controller.js";
const router = express.Router();

router.patch(
  "/:username/:idPlan",
  validateObjectIdMiddleware,
  modificarRolPorId
);
router.get("/planes", obtenerPlanes);

export default router;
