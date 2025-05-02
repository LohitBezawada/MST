const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;


//database change chesko instead of mongodb://localhost:27017
mongoose.connect("mongodb://localhost:27017/formData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model for the form data
const FormDataSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  amount: Number,
});

const FormData = mongoose.model("FormData", FormDataSchema);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post("/submit-form", async (req, res) => {
  try {
    const { name, phoneNumber, amount } = req.body;
    const formData = new FormData({ name, phoneNumber, amount });
    await formData.save();
    res.status(200).json({ message: "Form data submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to retrieve all form data
app.get("/form-data", async (req, res) => {
  try {
    const formData = await FormData.find();
    res.status(200).json(formData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
