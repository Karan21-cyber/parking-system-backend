const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema({
    location:[{type:mongoose.Schema.Types.ObjectId, ref:"location"}],
    spaceName : {type:String},
    slots:{type:Number},
    price:{type:Number},
},
{   
    timestamps:true,
});

const space = mongoose.model("space", spaceSchema);

module.exports = space;
