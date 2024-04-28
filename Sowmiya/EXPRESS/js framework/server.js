const express = require('express');
const app=express();
const path = require('path');
const PORT = 5000;



app.use(express.static(path.join(__dirname,'/public')));

app.get('/|#home',(req,res)=>{
   res.sendFile(path.join(__dirname,'views','demo.html'));

});

app.get('#about',(req,res)=>{
   res.sendFile(path.join(__dirname,'views','demo.html'));
  
 });

 app.get('#course',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','demo.html'));
 });

 app.get('#teachers',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','demo.html'));
 });

app.get('#reviews',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','demo.html'));
 });

 app.get('#contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','demo.html'));
 });

 
app.listen(PORT,()=>{
    console.log("server running on 5000");
});

