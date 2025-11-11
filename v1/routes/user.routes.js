import express from "express";
import {
  modificarRolPorUsername,
  obtenerPlanes,
  obtenerUsuarioPorUsername,
} from "../controllers/user.controller.js";
const router = express.Router();

router.patch("/:username/:idPlan", modificarRolPorUsername);
router.get("/planes", obtenerPlanes);
router.get("/:username", obtenerUsuarioPorUsername);

export default router;
