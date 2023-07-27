const express= require("express");
const { userLogin, userSignup } = require("../controllers/user-controller");
const userRouter= express.Router()


userRouter.post("/login",userLogin)
userRouter.post("/signup",userSignup)

module.exports=userRouter;