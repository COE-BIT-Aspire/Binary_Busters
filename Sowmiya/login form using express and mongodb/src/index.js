const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const collection=require("./config.js");


const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));  

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("login");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.post("/signup",async(req,res)=>{
    const data = {
        name:req.body.username,
        password:req.body.password
    }
    const existinguser = await collection.findOne({name:data.name});
    if(existinguser){
        res.send("user already exist use other name");
    }else{
        
        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }
});

//login user

app.post('/login',async(req,res)=>{
    try{
        const { username, password } = req.body;
        const user = await collection.findOne({ name: username });
        
        if (!user) {
            res.status(404).send("User not found");
            return;
        }
        if (user.password !== password) {
            res.status(401).send("Invalid password");
            return;
        }
        res.render("home");
    }
    catch{
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})


const connect = mongoose.connect("mongodb+srv://sowmiyaviswanathan07:GyFOp0Hzd4s8o1RI@cluster0.au8vgyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
connect.then(()=>{
    console.log("Database connected successfully");
    app.listen(3000,()=>{
        console.log("server is listening");
    })  
})
.catch(()=>{
    console.log("Database not connected");
})

