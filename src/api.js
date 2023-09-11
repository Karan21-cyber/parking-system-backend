const express = require("express");
const dbconnect = require("../db/config");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

const userRoutes = require("../Routes/userRoutes");
const locationRoutes = require("../Routes/locationRoutes");
const spaceRoutes = require("../Routes/spaceRoutes");
const reserveRoutes = require("../Routes/reserveRoutes");
const paymentRoutes = require("../Routes/paymentRoutes");
const bookingRoutes = require("../Routes/bookingRouter");

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/space", spaceRoutes);
app.use("/api/reserve", reserveRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/booking", bookingRoutes);

// app.listen(5000,() => console.log("Server running in port 5000."));

module.exports.handler = serverless(app);
