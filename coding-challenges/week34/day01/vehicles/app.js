const express = require('express')
const connectDB = require('./dbConfig')
const app = express()
const customerRouter = require('./routes/customerRouter')


app.use(express.json())
app.use('/customer',customerRouter)



app.listen(7375, () => {
  console.log("Started Successfully")
  connectDB()
})