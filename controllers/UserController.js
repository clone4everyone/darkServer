const Users=require("../userModel/UserModel.js");
const bcrypt=require("bcrypt");
const cloudinary = require("cloudinary");
const Posts=require("../userModel/ProfileModel.js");
exports.register=async(req,res,next)=>{
try{
 const {username,email,password,img}=req.body;

 const usernameExist=await Users.findOne({username});
 if(usernameExist){
  return res.json({msg:"username Already Exist",status:false});
 }
 const myCloud = await cloudinary.v2.uploader.upload(img, {
  folder: "avatars",
  width: 150,
  crop: "scale",
});
const hashedPassword=await bcrypt.hash(password,10);
const user=await Users.create({
  username,
  email,
  password:hashedPassword,
  avatar:myCloud.url
});
console.log("heelo")
console.log(user)

 return res.json({user,status:true});
}
catch(err){
  next(err)
}


}


exports.login=async(req,res,next)=>{
try{
const {username,password}=req.body;
const userexist=await Users.findOne({username});
if(!userexist){
  return res.json({msg:"username not exist",status:false})
}
const validatePassword=await bcrypt.compare(password,userexist.password);
if(validatePassword){
  return res.json({userexist,status:true})
}
}catch(exp){
  next(exp)
}
}

exports.updatePic=async(req,res,next)=>{
  try{
 const {id,newImage}=req.body;
  const myCloud = await cloudinary.v2.uploader.upload(newImage, {
    folder: "avatars",
    width: 150,
    crop: "scale",

  });
 await  Users.updateOne({_id:id},{$set:{avatar:myCloud.url}}).then((result) => {
  console.log('Document updated successfully:',result);
}).catch((err) => {
  console.error('Error updating document:', err);
})

await  Posts.updateMany({adminId:id},{$set:{profileImage:myCloud.url}}).then((result) => {
  console.log('Document updated successfully:',result);
}).catch((err) => {
  console.error('Error updating document:', err);
})
  }catch(err){
  console.log(err,'this is fucking err')
  }
 
}