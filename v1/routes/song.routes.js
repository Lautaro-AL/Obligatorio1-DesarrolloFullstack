import express from "express";
import {
  getSongs,
  getCancionesPorCategoria,
} from "../controllers/song.controller.js";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", getSongs);

router.get(
  "/categoria/:id",
  validateObjectIdMiddleware,
  getCancionesPorCategoria
);

export default router;
