const express = require('express')
const bnbRouter = require('./bnbroute')
const connectDB = require('./dbconfig')
const app = express()

app.use('/',bnbRouter);
app.use(express.json())


app.listen(6252, () => {
    console.log("Started Successfully")
    connectDB()
  })