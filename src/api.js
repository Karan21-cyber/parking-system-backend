const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const dbconnect = require("../db/config");

const app = express();

const userRoutes = require("../Routes/userRoutes");
const locationRoutes = require("../Routes/locationRoutes");
const spaceRoutes = require("../Routes/spaceRoutes");
const reserveRoutes = require("../Routes/reserveRoutes");
const paymentRoutes = require("../Routes/paymentRoutes");
const bookingRoutes = require("../Routes/bookingRouter");

app.use(express.json());
app.use(cors());

// Define your routes
app.use("/user", userRoutes);
app.use("/location", locationRoutes);
app.use("/space", spaceRoutes);
app.use("/reserve", reserveRoutes);
app.use("/payment", paymentRoutes);
app.use("/booking", bookingRoutes);

app.get("/", (req, res) => {
  res.send("hello from api!");
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Connect to the database
dbconnect()
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Use serverless to export the app as a serverless function
module.exports.handler = serverless(app);
