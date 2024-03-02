const PostRoutes=require('express').Router();

const {addPost,getAllAdminPost,homePost,friendProfile,search,searchDataPosts,one}=require('../controllers/PostController.js')

PostRoutes.post('/add',addPost)
PostRoutes.post('/getAllAdminPost',getAllAdminPost);
PostRoutes.post('/homePost',homePost);
PostRoutes.post('/friendProfile',friendProfile)
PostRoutes.post('/search',search);
PostRoutes.post('/searchData',searchDataPosts)

PostRoutes.post('/one',one)


module.exports=PostRoutes;