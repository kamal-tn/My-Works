const express = require("express");
const app = express();

app.listen(3000,function(){
    console.log("hi");
})

const users = [{
    id:1,
    username:"kamal",
    age:27
},
{
    id:2,
    username:"nathan",
    age:25
}]

app.get('/userinfo',function(req,res){
    console.log ("server started");
    res.send(users);
})

app.get('/userinfo/name',function(req,res){
    console.log ("server started");
    let filter = [];
    filter.push(users[0].username,users[1].username)
    res.send(filter);
})

app.get('/userinfo/id',function(req,res){
    console.log ("server started");
    let filter = [];
    filter.push(users[0].id,users[1].id)
    res.send(filter);
})

app.get('/userinfo/age',function(req,res){
    console.log ("server started");
    let filter = [];
    filter.push(users[0].age,users[1].age)
    res.send(filter);
})