import express from "express";
import { obtenerCategorias } from "../controllers/categoria.controller.js";
const router = express.Router();

router.get("/", obtenerCategorias);

export default router;
