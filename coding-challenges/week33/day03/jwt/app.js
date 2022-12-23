const express = require('express')
const employeeRouter = require('./routes/employeeRouter')
const authRouter = require('./routes/authRouter')
const connectDB = require('./dbConfig')
const cookieParser = require('cookie-parser')
const app = express()


app.use(express.json())
app.use('/employee', employeeRouter)
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/',authRouter)


app.listen(6969, () => {
  console.log("Started Successfully")
  connectDB()
})