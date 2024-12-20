//routes are defined here
import express from "express";

import {
  getHoards,
  createHoard,
  getHoardsByCounty,
  getHoardById,
} from "../models/hoards.js";

const router = express.Router();
export default router;

// endpoint for returning by ID
router.get("/:id", async (req, res) => {
  console.log("Got into the id route");
  try {
    const hoard = await getHoardById(req.params.id);

    console.log("got back a hoard:");
    console.log(hoard);

    if (!hoard) {
      return res.status(404).json({ success: false });
    }

    return res.json({
      success: true,
      payload: hoard,
    });

    // point out to Kim how this differs from our astronauts solution, where we did separate res.json and return statements, which got messy in terms of exiting function
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const { county } = req.query;
    console.log("checking for a county query");
    console.log(county);
    if (!county) {
      // no county query was sent, so return all the records:
      const hoards = await getHoards();
      return res.json({
        success: true,
        payload: hoards,
      });
    }
    // a county query was sent, so return records for that county only:
    const hoards = await getHoardsByCounty(county);
    res.json({
      success: true,
      payload: hoards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      //message: error.message,
      message: "trying to send county",
    });
  }
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
});
