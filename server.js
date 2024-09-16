const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const healthRecordsRoutes = require("./routes/healthRecords");
const cors = require('cors');


require("dotenv").config();

connectDB();

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/health-records", healthRecordsRoutes);

app.get("/", (req, res) => {
  res.send("Health Records API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
