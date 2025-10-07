import express from "express";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";
import { modificarRolPorId } from "../controllers/user.controller.js";
const router = express.Router();

router.patch("/:id/:idPlan", validateObjectIdMiddleware, modificarRolPorId);

export default router;
