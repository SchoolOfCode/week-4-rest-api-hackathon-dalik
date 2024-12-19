//routes are defined here
import express from "express";

const router = express.Router();
export default router;

router.get("/", async (req, res) => {
  res.send("Here are the hoards");
});
