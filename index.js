const express=require('express');
const app=express();
const port = 8000;


app.listen(port,function(err){
    if(err){
        console.log('something wrong in starting server !!!');
        return;
    }
     return console.log("server is up and running on port ",port);
});