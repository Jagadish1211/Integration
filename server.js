

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/",function(req,res){
    res.json({message: "Hi I am the backend"});
});



app.listen(PORT,function (){
    console.log("Server is up")
});