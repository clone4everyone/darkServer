const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50,
    },
    password:{
        type:String,
        required:true,
        max:50,
    }
      
    ,
    avatar:{
        type:String,
        default:""
    },
    followers:{
        type:Number,
        default:0
    },
    followings:{
        type:Number,
        default:0
    },
    

  
},{timestamps:true})


module.exports=mongoose.model("Users",userSchema);