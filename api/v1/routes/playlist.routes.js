import express from "express";
import {
  crearPlaylist,
  obtenerPlaylists,
  eliminarPlaylist,
  modificarPlaylistPorId,
  agregarCancionAPlaylist,
} from "../controllers/playlist.controller.js";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";
const router = express.Router();

router.post("/", crearPlaylist);

router.get("/", obtenerPlaylists);

router.delete("/:id", validateObjectIdMiddleware, eliminarPlaylist);

router.patch("/:id", validateObjectIdMiddleware, modificarPlaylistPorId);

router.post("/add-song", agregarCancionAPlaylist);

export default router;
