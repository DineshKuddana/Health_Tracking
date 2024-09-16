const mongoose = require("mongoose");

const healthRecordSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    bodyTemperature: { type: Number, required: true },
    bloodPressure: { type: String, required: true },
    heartRate: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HealthRecord", healthRecordSchema);
