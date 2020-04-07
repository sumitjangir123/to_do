//setting up express server
const express=require('express');
const port = 8000;

//express functions
const app=express();
app.use(express.urlencoded());
app.use(express.static('assets'));

//use express router
app.use('/',require("./routes/index.js"));

//set up ejs
app.set("view engine","ejs");
app.set("views","./views");

//setting up server
app.listen(port,function(err){
    if(err){
        console.log('something wrong in starting server !!!');
        return;
    }
     return console.log("server is up and running on port ",port);
});