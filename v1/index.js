import express from "express";
import auth from "./routes/auth.routes.js";
import playlist from "./routes/playlist.routes.js";
import songs from "./routes/song.routes.js";
import categorias from "./routes/categorias.routes.js";
import user from "./routes/user.routes.js";
import { authenticateToken } from "./middlewares/auth.middleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.json({ message: "API v1 is working!" });
});
router.use("/auth", auth);

router.use(authenticateToken);
router.use("/playlist", playlist);
router.use("/song", songs);
router.use("/categorias", categorias);
router.use("/user", user);

export default router;
