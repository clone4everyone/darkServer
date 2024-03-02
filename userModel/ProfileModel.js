const mongoose=require('mongoose');

const ProfileModel=new mongoose.Schema({
  contentImage:{
    type:String,
    default:"https://th.bing.com/th/id/OIP.P8fJWbgoZs1jfbe7aaTLHQHaEK?rs=1&pid=ImgDetMain",
    
  }  ,
  username:{
    type:String,
    required:true
  }
,
  contentDescription:{
    type:String,
    required:true
  },
  title:{
type:String,
required:true
  },
  adminId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Users",
  },
  profileImage:{
    type:String,
    default:'',
    
  }
},{timestamps:true})

module.exports=mongoose.model("Profiles",ProfileModel);