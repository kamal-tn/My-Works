const express = require("express");
const app = express();
const user = require("./user.json");

app.listen(3000,function(){
    console.log("hi");
})

app.get('/users',function(req,res){
    const mock = require("./user.json");
    console.log (mock);
    res.send(mock);
})

app.get('/users/1',function(req,res){
    const mock = require("./user.json");
    //console.log (mock);
    res.send(mock[0]);
})