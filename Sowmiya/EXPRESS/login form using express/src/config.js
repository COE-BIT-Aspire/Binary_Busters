const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = mongoose.model("user",LoginSchema);

module.exports=collection;