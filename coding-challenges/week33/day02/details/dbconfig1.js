const mongoose = require('mongoose');

const connectionURL = "mongodb+srv://kamalanathan:happyhome@kamalanathan.zljp46n.mongodb.net/test"

async function connectDB() {
  try {
    await mongoose.connect(connectionURL,{dbName: "Details"})
    console.log("DB Connection Successful")
  } catch (error) {
    console.log("Error Connecting to DB")
  }
}

module.exports = connectDB