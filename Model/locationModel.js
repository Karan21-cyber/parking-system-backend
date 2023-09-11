const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
    locationName:{type:String},
    address:{type:String},
    phone:{type:Number},
},
{
    timestamps :true,
})

const location = mongoose.model("location", locationSchema);

module.exports = location;