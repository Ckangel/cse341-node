// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/frontendData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema & Model
const dataSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  links: [{ label: String, url: String }],
});

const DataModel = mongoose.model("Data", dataSchema);

// API Routes
app.get("/api/data", async (req, res) => {
  try {
    const data = await DataModel.findOne(); // Use .find() if multiple entries are expected
    if (!data) {
      return res.status(404).json({ message: "No data found" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
