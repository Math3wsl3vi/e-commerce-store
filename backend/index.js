const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { ClientRequest } = require("http");

app.use(express.json());
app.use(cors());

//database connection
mongoose.connect("mongodb+srv://math3wl3vi:nairobi25@cluster0.jyxt1sa.mongodb.net/e-commerce");


// API creation

app.get("/",(req,res)=>{
    res.send("Express app is running")
})

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port" +port)
    }
    else{
        console.log("error :"+error)
    }
})