//routes are defined here
import express from "express";

import { getHoards, createHoard, getHoardsByCounty } from "../models/hoards.js";

const router = express.Router();
export default router;
/* OLD WORKING GET for ALL
router.get("/", async (req, res) => {
  const hoards = await getHoards();
  res.json(hoards);
});
*/

router.get("/", async (req, res) => {
  try {
    const { county } = req.query;
    console.log(county);
    if (!county) {
      // no county query was sent, so return all the records:
      const hoards = await getHoards();
      res.json({
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
      message: error.message,
    });
  }
});

//   try {
//     const { name } = req.query;
//     console.log(name);
//     if (!name) {
//       const astronauts = await getAstronauts();
//       return res.json({ success: true, payload: astronauts });
//     }
//     const astronauts = await getAstronautsByName(name);
//     res.json({ success: true, payload: astronauts });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

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
