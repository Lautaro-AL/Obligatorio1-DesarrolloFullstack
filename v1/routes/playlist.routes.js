import express from "express";
import {
  crearPlaylist,
  obtenerPlaylists,
  eliminarPlaylist,
  rPlaylistPorId,
  agregarCancionAPlaylist,
} from "../controllers/playlist.controller.js";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { playlistSchema } from "../validators/auth.validators.js";
const router = express.Router();

router.post(
  "/",
  authenticateToken,
  validateBody(playlistSchema),
  crearPlaylist
);

router.get("/", obtenerPlaylists);

router.delete("/:id", validateObjectIdMiddleware, eliminarPlaylist);

router.patch("/:id", validateObjectIdMiddleware, modificarPlaylistPorId);

router.post("/add-song", agregarCancionAPlaylist);

export default router;
