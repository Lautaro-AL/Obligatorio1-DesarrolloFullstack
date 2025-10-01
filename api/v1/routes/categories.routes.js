import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Categories route is working!" });
});

export default router;
