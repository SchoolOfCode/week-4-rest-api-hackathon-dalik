//routes are defined here
import express from "express";

import { getHoards, createHoard } from "../models/hoards.js";

const router = express.Router();
export default router;

router.get("/", async (req, res) => {
  const hoards = await getHoards();
  res.json(hoards);
});

router.post("/", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false });
    }
    const createdHoard = await createHoard(req.body);
    res.json({ success: true, payload: createdHoard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }

  //   if (!req.body || Object.keys(req.body).length === 0) {
  //     return res.status(400).json({ success: false });
  //   }
});
