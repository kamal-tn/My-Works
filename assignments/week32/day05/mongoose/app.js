const express = require('express')
const employeeRouter = require('./routes/employeeRouter')
const connectDB = require('./dbConfig')

const app = express()


app.use(express.json())
app.use('/', employeeRouter)


app.listen(8000, () => {
  console.log("Started Successfully")
  connectDB()
})