import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Create playlist route" });
});

router.get("/", (req, res) => {
  res.json({ message: "Get all playlists route" });
});

router.patch("/:playlistId", (req, res) => {
  res.json({ message: `Update playlist ${req.params.playlistId} route` });
});

router.delete("/:playlistId", (req, res) => {
  res.json({ message: `Delete playlist ${req.params.playlistId} route` });
});

export default router;
