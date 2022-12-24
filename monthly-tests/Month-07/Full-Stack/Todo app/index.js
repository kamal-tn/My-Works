const express = require('express');
const app = express();
const connectDB = require('./dbconfig')

app.set("view engine","ejs");
app.use("/static",express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render("todo.ejs")
})

app.post ('/', (req,res) => {
    console.log(req.body);
})

app.listen(6565, () => {
    console.log("server started");
    connectDB();
})