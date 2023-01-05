const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://n:nasanbayar_1@cluster0.xwhjtpi.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URI);
    console.log("ok");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connect;