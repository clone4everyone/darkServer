const Follow = require("../userModel/FollowModel.js");
const User = require('../userModel/UserModel.js')
exports.addFollow = async (req, res, next) => {
    try {
        const { toUsername, fromUsername, toId, fromId, fromImage,
            toImage } = req.body;
        const data=  await User.findOneAndUpdate( 
            { _id: toId },
            { $inc: { followers: 1 }
        }
            )

            const data3=  await User.findOneAndUpdate( 
                { _id: fromId },
                { $inc: { followings: 1 }
            }
                )
      const data1=await Follow.findOne({
         followerId:fromId,
         toId:toId
      })
      if(data1!==null){
        return res.json({status:true})
      }

        await Follow.create({
            followerId: fromId,
            followerName: fromUsername,
            toId: toId,
            toUsername: toUsername,
            fromImage:fromImage,
            toImage:toImage
        })
   
        return res.json({status:true})
       
    } catch (exp) {
        next(exp)
    }
}


exports.getNumbers=async(req,res,next)=>{
    try{
       const {id}=req.body;
       const data=await User.findOne({
        _id:id
       })

       return res.json({status:true,data})
    }catch(exp){
        next(exp)
    }
}

exports.followDetail=async(req,res,next)=>{
try{
const {fromUsername,toUsername}=req.body;

const data=await Follow.find({
    followerName:fromUsername,
    toUsername:toUsername
})
if(data.length!==0){
    return res.json({status:true})
}
return res.json({status:false})
}catch(exp){
    next(exp)
}
}

exports.followings=async(req,res,next)=>{
    try{
       const {toId}=req.body;
       const data= await Follow.find({
        followerId:toId
       })
       return res.json({status:true,data})
    }catch(exp){
        next(exp)
    }
}

exports.follower=async(req,res,next)=>{
    try{
       const {id}=req.body;
       const data= await Follow.find({
    toId:id
       })
       return res.json({status:true,data})
    }catch(exp){
        next(exp)
    }
}

exports.unFollow=async(req,res,next)=>{
    try{
      const {toId,fromId}=req.body;
      
      const data=await Follow.findOneAndDelete(
        { $and: [{ toId: toId }, {
            followerId:fromId}] },
       
      )
console.log(data,'das')
      const data2=await User.findOneAndUpdate(
        {_id:toId},
        { $inc: { followers: -1 }}
      );


      const data3=await User.findOneAndUpdate(
        {_id:fromId},
        { $inc: { followings: -1 }}
      );
      return res.json({status:true})
    }catch(exp){
        next(exp)
    }
}


exports.getFollowers=async(req,res,next)=>{
    try{
        console.log("asfafej")
       const {toId}=req.body;
       const data=await Follow.find({
        toId:toId
       });
       res.json({status:true,data})
    }catch(err){
        next(err)
    }
}

exports.getFollowings=async(req,res,next)=>{
    try{
        const {toId}=req.body;
        const data=await Follow.find({
         followerId:toId
        });
  console.log(data)
        res.json({status:true,data})
    }catch(exp){
        next(exp)
    }
}