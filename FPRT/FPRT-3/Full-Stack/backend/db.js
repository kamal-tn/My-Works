const mongoose = require("mongoose");

const connectionURL =
  "mongodb+srv://kamalanathan:happyhome@kamalanathan.zljp46n.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(connectionURL, { dbName: "mytube" });
    console.log("DB Connection Successful");
  } catch (error) {
    console.log("Error Connecting to DB");
  }
}

module.exports = connectDB;
