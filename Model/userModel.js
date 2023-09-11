const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    address: { type: String },
    password: { type: String },
    role: { type: String, default: "user" },
  },
  {
    timestamp: true,
  }
);

userSchema.pre("save", async (next) => {
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
    next();
});


userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword,this.password);
}

const user = mongoose.model("user", userSchema);

module.exports = user;