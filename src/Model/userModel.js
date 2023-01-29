const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId;
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        required:true,
        enum:["admin","superAdmin","employee"],
        trim:true
    }
},{timestamps:true})

module.exports= mongoose.model('user',userSchema)