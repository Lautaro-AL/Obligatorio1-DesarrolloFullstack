import express from "express";
import { getSong, createSong } from "../controllers/song.controller.js";
const router = express.Router({ mergeParams: true });

router.get("/", getSong);
router.post("/", createSong);

export default router;
