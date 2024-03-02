const FollowRoutes=require('express').Router();
const {addFollow,getNumbers,followDetail,followings,unFollow,follower,getFollowers,getFollowings}=require('../controllers/FollowController.js')
FollowRoutes.post('/addFollow',addFollow);
FollowRoutes.post('/getNumbers',getNumbers);
FollowRoutes.post('/followDetail',followDetail)
FollowRoutes.post('/followings',followings)
FollowRoutes.post('/follower',follower)
FollowRoutes.post('/unFollow',unFollow)
FollowRoutes.post('/getFollowers',getFollowers)
FollowRoutes.post('/getFollowings',getFollowings)
module.exports=FollowRoutes;