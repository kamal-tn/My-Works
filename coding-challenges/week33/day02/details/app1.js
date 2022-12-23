const express = require('express')
const userRouter = require('./routes/userroute')
const productRouter = require('./routes/productroute')
const connectDB = require('./dbconfig1')

const app = express()


app.use(express.json())
//app.use('/', userRouter,productRouter)
//app.use(express.static("public"))

app.use('/product',productRouter)
app.use('/user',userRouter)

app.listen(8000, () => {
  console.log("Started Successfully")
  connectDB()
})