import express from "express";
import auth from "./routes/auth.routes.js";
import playlist from "./routes/playlist.routes.js";
import songs from "./routes/song.routes.js";
import categories from "./routes/categories.routes.js";
import { authenticateToken } from "../v1/middlewares/auth.middleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.json({ message: "API v1 is working!" });
});
router.use("/auth", auth);

router.use(authenticateToken);
router.use("/playlist", playlist);
router.use("/song", songs);
router.use("/categories", categories);

export default router;

// hacer login y register en auth.controller.js, y terminar la logica del proyecto
// verse clase que explica el obligatorio de nuevo
// ver mongoose, ver en el calendario q clase (notion)
//terminar login register
