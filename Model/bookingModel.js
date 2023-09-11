const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  location: [{ type: mongoose.Types.ObjectId, ref: "location" }],
  space: [{ type: mongoose.Types.ObjectId, ref: "space" }],
  slotNo: { type: Number }
},
{
  timestamps:true,
});

const booking = mongoose.model("booking", bookingSchema);

module.exports = booking;

