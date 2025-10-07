import express from "express";
import { getSongs } from "../controllers/song.controller.js";
const router = express.Router({ mergeParams: true });

router.get("/", getSongs);

export default router;
