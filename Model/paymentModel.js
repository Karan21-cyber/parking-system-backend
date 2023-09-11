const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    user:[{type:mongoose.Types.ObjectId, ref:"user"}],
    location:[{type:mongoose.Types.ObjectId, ref:"location"}],
    space:[{type:mongoose.Types.ObjectId , ref:"space"}],
    reserve:[{type:mongoose.Types.ObjectId , ref:"reserve"}],
    slotNo:{type:Number},
    vehicalNo:{type:String},
    entryDate:{type:String},
    totalHrs:{type:String},
    amount:{type:String},
},
{
    timestamps:true,
})

const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;