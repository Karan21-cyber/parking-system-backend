const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://KaranMongo:Karan123@cluster0.ofntxvz.mongodb.net/parkingsystem"
  )
  .then(() => console.log(`connected to database!`));