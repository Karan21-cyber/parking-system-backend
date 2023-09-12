const express = require("express");
const cors = require("cors");
const dbconnect = require("./db/config");

const app = express();

const userRoutes = require("./Routes/userRoutes");
const locationRoutes = require("./Routes/locationRoutes");
const spaceRoutes = require("./Routes/spaceRoutes");
const reserveRoutes = require("./Routes/reserveRoutes");
const paymentRoutes = require("./Routes/paymentRoutes");
const bookingRoutes = require("./Routes/bookingRouter");

app.use(express.json());
app.use(cors());

// Define your routes
app.use("/api/user", userRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/space", spaceRoutes);
app.use("/api/reserve", reserveRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/booking", bookingRoutes);

app.get("/", async (req, res) => {
  return res.send("hello from api!");
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
