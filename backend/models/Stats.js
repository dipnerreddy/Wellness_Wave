const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to User model
  type: { type: String, required: true }, // "steps" or "calories"

  daily: [
    {
      date: String, // Format: "YYYY-MM-DD"
      value: Number, // Steps count or Calories burned
    },
  ],

  weekly: [
    {
      weekStart: String, // Format: "YYYY-MM-DD" (Start of the week)
      value: Number, // Total steps or calories for the week
    },
  ],

  monthly: [
    {
      month: String, // Format: "YYYY-MM"
      value: Number, // Total steps or calories for the month
    },
  ],
});

module.exports = mongoose.model("Stats", StatsSchema);
