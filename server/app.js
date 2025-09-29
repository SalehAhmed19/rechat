const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();

// route controller
const userRoutes = require("./routes/userRoutes");

// middlewares
app.use(cors());
app.use(express.json());

const URI = process.env.MONGO_URI;

app.get("/", async (req, res) => {
  res.send({
    message: "Rechat",
  });
});

// routes
app.use("/api/user", userRoutes);

try {
  mongoose.connect(URI);
  console.log("Connected to mongodb through mongoose");
} catch (err) {
  console.log(err);
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
