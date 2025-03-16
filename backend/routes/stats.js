const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");

// ✅ GET Stats (Daily, Weekly, Monthly)
router.get("/:type/:range", async (req, res) => {
  const { type, range } = req.params;

  try {
    const stats = await Stats.findOne({ type });

    if (!stats) {
      return res.status(404).json({ message: "No stats found for this type" });
    }

    res.json(stats[range]); // Send the requested range (daily/weekly/monthly)
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ POST New Stats (Manually Add Data)
router.post("/", async (req, res) => {
  const { type, range, value, date } = req.body; // Example: { type: "steps", range: "daily", value: 5000, date: "2025-03-16" }

  try {
    let stats = await Stats.findOne({ type });

    if (!stats) {
      stats = new Stats({ type, daily: [], weekly: [], monthly: [] });
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
