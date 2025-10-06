import express from "express";
import { validateBody } from "../middlewares/validate.middleware.js";
import { login, register } from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from "../validators/auth.validators.js";
const router = express.Router();

router.post("/login", validateBody(loginSchema), login);
router.post("/register", validateBody(registerSchema), register);

export default router;
