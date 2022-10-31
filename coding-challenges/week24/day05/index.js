const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000,function(){
    console.log("hi");
});

app.get('/posts',function(req,res){
    const post = require('./posts.json');
    res.send(post);
});

app.get('/comments',function(req,res){
    const comment = require('./comments.json');
    res.send(comment);
});

app.get ('/postwithComment',function(req,res){
    const comment = require('./comments.json');
    const post = require('./posts.json');
    const pwc = post.concat({comments: comment});
    res.send(pwc);
})