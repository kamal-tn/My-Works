const mongoose = require('mongoose');

const connectionURL = "mongodb+srv://kamalanathan:happyhome@kamalanathan.zljp46n.mongodb.net/test"

async function connectDB() {
    try {
        await mongoose.connect (connectionURL, {dbName: "Todo"})
        console.log("DB connection sucessful")
    } catch (error) {
        console.log ("Error connecting DB")
    }
}

module.exports = connectDB;