import express from "express";

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.json({ message: "Song route is working!" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create song route" });
});

export default router;
