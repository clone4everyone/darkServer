const mongoose=require('mongoose');


const followSchema=new mongoose.Schema({

    followerId:{
        type:String,
        require:true
    },
    followerName:{
        type:String,
    },
    
    toId:{
        type:String,
        require:true
    },
    toUsername:{
        type:String,
        require:true
    },
    toImage:{
        type:String,
        
    },
    fromImage:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Follow",followSchema);