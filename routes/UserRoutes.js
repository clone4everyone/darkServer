const UserRoutes=require('express').Router();
const {register,login,updatePic}=require('../controllers/UserController.js')
UserRoutes.post("/register",register)
UserRoutes.post("/login",login)
UserRoutes.post('/updatePic',updatePic)
module.exports=UserRoutes