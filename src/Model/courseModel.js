const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId;
const courseSchema= new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    videoUrl:{
        type:String
    },
    topics:{
        type:Array
    },
    duration:{
        type:Number
    },
    category:{
        type:String
    },
   userId:{
    type:ObjectId,
    ref:'user'
   },
   isApprove:{
    type:Boolean,
    default:false
   }
},{timestamps:true})

module.exports= mongoose.model('course',courseSchema);