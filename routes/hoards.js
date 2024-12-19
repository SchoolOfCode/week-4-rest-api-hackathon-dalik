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
  const createdHoard = await createHoard(req.body);
  res.send(createdHoard);
});
