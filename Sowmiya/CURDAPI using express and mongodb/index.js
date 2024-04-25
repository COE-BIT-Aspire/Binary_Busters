const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));


//view data from server

app.get('/',async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
 
     }catch(error){
         res.status(500).json({message:error.message});
     }
  
}) ;

app.get('/api/products',async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
 
     }catch(error){
         res.status(500).json({message:error.message});
     }

});


app.get('/api/products/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
       
     }catch(error){
         res.status(500).json({message:error.message});
     }

});

// store data to server

app.post('/api/products',async(req,res)=>{
    try{
       const product = await Product.create(req.body);
       res.status(200).json(product);

    }catch(error){
        res.status(500).json({message:error.message});
    }
});




//update product --put,patch

app.put('/api/products/:id',async(req,res)=>{

    try{
        const {id} = req.params;
        const product =await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(500).json({message:error.message});
        }
        const updatedProduct=await Product.findById(id);
        res.status(200).json(updatedProduct);

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});



//delete a product 

app.delete('/api/products/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product =await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({message:"Product deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});



mongoose.connect("mongodb+srv://sowmiyaviswanathan07:E7DAr7W45KMqvtrE@cluster0.f4yylae.mongodb.net/")
.then(()=>{
    console.log("connected to database");
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    });
})
.catch(()=>{
    console.log("connection failed");
})
