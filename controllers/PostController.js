const Posts=require("../userModel/ProfileModel.js");
const User=require('../userModel/UserModel.js')
const cloudinary = require("cloudinary")
exports.addPost=async(req,res,next)=>{
    const {admin,img,discription,username,profileImage,title}=req.body;
    try{
        const myCloud = await cloudinary.v2.uploader.upload(img, {
            folder: "avatars",
            width: 150,
            crop: "scale",
          });

        const data=await Posts.create({
            contentImage:myCloud.url,
            contentDescription:discription,
            adminId:admin,
            username:username,
            profileImage:profileImage,
            title:title
        });
       
      return res.json({status:true});
    }catch(exp){
        next(exp);
    }
}

exports.getAllAdminPost=async(req,res,next)=>{
   const {id}=req.body;
   try{
 const data=await Posts.find({adminId:id});


return  res.json({data,status:true})
   }catch(exp){
    next(exp)
   }
  
}


exports.homePost=async(req,res,next)=>{
    try{
       const {uniqueId}=req.body;
    //    ERROR
       const data=await Posts.find({adminId:{$ne:uniqueId}}).select([
        'username','contentImage','contentDescription','profileImage','adminId','title'
       ])
       return res.json({data:data,status:true});
    }catch(exp){
        next(exp)
    }
}

exports.friendProfile=async(req,res,next)=>{
    try{
const {id}=req.body;

const data=await Posts.find({adminId:id});
return res.json({data,status:true})
    }catch(epx){
        next(exp)
    }
}

exports.search=async(req,res,next)=>{
    try{
          const {searchName,id}=req.body;
          const user=await User.findOne({username:searchName});
          if(!user){
            return res.json({msg:'User not found',status:false});
          }
         console.log(user)
          return res.json({status:true,user})
    }catch(exp){
        next(exp)
    }
}

exports.searchDataPosts=async(req,res,next)=>{
try{
 const {id}=req.body;
 const data=await Posts.find({adminId:id});
 return res.json({data,status:true})
}catch(exp){
    next(exp);
}
}

exports.one=async(req,res,next)=>{
    try{
         const{id}=req.body;
         const data=await User.findOne({_id:id})
         return res.json({status:true,data})
    }catch(exp){
        next(exp)
    }
}