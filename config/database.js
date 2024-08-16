const mongoose = require("mongoose");
require('dotenv').config()
const url = process.env.CONNECT_URL;


const connect = async () => {
  try {
      await mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
  } catch (err) {
      console.log("MongoDB connection string:", url);
      console.error("Database error:", err);
  }
};

module.exports = connect;