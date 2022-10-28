const express = require("express");
const app = express();
app.use(express.static('public'));

app.listen(3000,function(){
    console.log("hi");
});

app.get('/',function(req,res){
    res.sendFile('public/index.html' , { root : __dirname});
});

app.get('/about',function(req,res){
    res.sendFile('public/about.html' , { root : __dirname});
});

app.get('/contact',function(req,res){
    res.sendFile('public/contact.html' , { root : __dirname});
});