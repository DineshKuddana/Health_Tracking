const HealthRecord = require("../models/healthRecord");

exports.createHealthRecord = async (req, res) => {
  try {
    const { date, bodyTemperature, bloodPressure, heartRate } = req.body;
    const newRecord = new HealthRecord({
      date,
      bodyTemperature,
      bloodPressure,
      heartRate,
    });

    const record = await newRecord.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: "Error creating health record" });
  }
};

exports.getAllHealthRecords = async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: "Error fetching health records" });
  }
};

exports.getHealthRecordById = async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: "Error fetching health record" });
  }
};

exports.updateHealthRecord = async (req, res) => {
  try {
    const { date, bodyTemperature, bloodPressure, heartRate } = req.body;
    const updatedRecord = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { date, bodyTemperature, bloodPressure, heartRate },
      { new: true }
    );

    if (!updatedRecord)
      return res.status(404).json({ error: "Record not found" });
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: "Error updating health record" });
  }
};





exports.deleteHealthRecord = async (req, res) => {
    try {
      const id = req.params.id;
      
      
      const recordExist = await HealthRecord.findById(id);
      
      if (!recordExist) {
        return res.status(404).json({ message: "Health Record Not Found" });
      }
  
      
      await HealthRecord.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Health Record Deleted Successfully" });
    } catch (error) {
      console.error("Error deleting health record:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  