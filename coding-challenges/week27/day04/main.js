const express = require("express");
const app = express();


app.listen(8054,function(){
    console.log("hi");
});

app.get('/',(request,response)=>{
    let count = 0;
    if (request.visit){
        count++
    }
response.send("No of times visited:"+ count)
}
);

app.get('/reset',(request,response)=>{

response.send("You have not visited this page")
}
);