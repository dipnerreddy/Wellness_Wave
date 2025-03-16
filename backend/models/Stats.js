const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");
const authMiddleware = require("../middleware/authMiddleware");

// ✅ POST: Add Stats Data for Logged-in User
router.post("/", authMiddleware, async (req, res) => {
  const { type, range, value, date } = req.body;
  const userId = req.user.id; // Extract userId from JWT token

  try {
    let stats = await Stats.findOne({ userId, type });

    if (!stats) {
      stats = new Stats({ userId, type, daily: [], weekly: [], monthly: [] });
    }

    if (range === "daily") {
      stats.daily.push({ date, value });
    } else if (range === "weekly") {
      stats.weekly.push({ weekStart: date, value });
    } else if (range === "monthly") {
      stats.monthly.push({ month: date, value });
    } else {
      return res.status(400).json({ error: "Invalid range type" });
    }

    await stats.save();
    res.status(201).json({ message: "Data added successfully", stats });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
