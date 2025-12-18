import express from 'express';
import User from '../models/user.model.js';
import {login, signup, logout, updateProfile,checkAuth,uploadPost,getPosts,likePost,writeComment,loadComments,findUser,updateName,changePassword,getUserPosts,deletePost} from '../controller/auth.controller.js';
 import multer from "multer";
import {protectRoute} from  '../middleware/auth.middleware.js';
import Friend from '../models/friend.model.js';

const storage = multer.memoryStorage();
const upload = multer({storage});

const authRoute=express.Router();


 authRoute.get("/check",async(req,res)=>{
  try{
return res.status(200).json({message:"Ok"});
  }
  catch(error){
   res.status(500).json({message:"Internal server error"});

  }

 });

authRoute.post("/login",login);

authRoute.post("/signup",signup);

authRoute.post("/logout",logout);

 authRoute.post("/profile-update",upload.single("image"),updateProfile);

 authRoute.post("/upload-post",upload.single("image"),uploadPost);

 authRoute.post("/checkAuth",protectRoute,checkAuth);

 authRoute.get("/getPosts/:userId",getPosts);
 authRoute.post("/likePost",likePost)
 authRoute.post("/writeComment",writeComment);
 authRoute.post("/loadComments",loadComments);
authRoute.post("/findUser",findUser);
authRoute.get("/userPosts/:userId",getUserPosts);
authRoute.post("/deletePost",protectRoute,deletePost);
authRoute.post("/update-name",protectRoute,updateName);
authRoute.post("/change-password",protectRoute,changePassword);



export default authRoute;



