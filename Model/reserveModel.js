const mongoose = require("mongoose");

const reserveSchema = mongoose.Schema(
  {
    booking: [{ type: mongoose.Types.ObjectId, ref: "booking" }],
    user:[{type:mongoose.Types.ObjectId, ref:"user"}],
    location: [{ type: mongoose.Types.ObjectId, ref: "location" }],
    space: [{ type: mongoose.Types.ObjectId, ref: "space" }],
    slotNo: { type: Number },
    vehicalNo: { type: String },
    entryDate: { type: String },
    entryTime: { type: String },
    hours: { type: String },
    amount:{type:String}
  },
  {
    timestamps: true,
  }
);

const reserve = mongoose.model("reserve", reserveSchema);

module.exports = reserve;