const express = require("express");
const app = express();
const randomcolor = require("randomcolor");
const color = randomcolor();
const today = new Date();
const all = require("everyday-fun");

app.get('/randomcolor',(request,response) => {
    response.send(randomcolor({
        luminosity: 'dark',
        format: 'rgba',
        alpha: 0.5
     }));
});

app.get('/currentDate',(request,response)=>{
    response.send(today);
});

app.get('/joke',(request,response)=>{
    response.send(all.getRandomJoke().body);
});

app.get('/quote',(request,response)=>{
    response.send(all.getRandomQuote());
});

app.get('/riddle',(request,response)=>{
    response.send(all.getRandomRiddle());
});

app.listen(8054,function(){
    console.log("hi");
});

