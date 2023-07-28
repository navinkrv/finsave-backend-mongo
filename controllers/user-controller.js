const mongoose=require("mongoose")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const { findOne } = require("../model/User")
const User = require("../model/User")

// 1. login

const userLogin=async (req,res)=>{

    const {email,password}=req.body;
    let existingUser;

    try{

        existingUser= await User.findOne({email})
    }
    catch(err){
        console.log(err);
        res.status(200).json({msg:"something went wrong!"})
    }
        
        if(!existingUser){
            res.status(200).json({msg:"User not found!"})
        }
        else{
            

        }


}

// 2. Signup

const userSignup= async (req,res) => {
    const {name, number,email,password}=req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({email}) 
        if(existingUser){
            res.status(200).json({msg:"User already Exists!"})
        }
    }catch(err){
        console.log(err);
    }

    if(!existingUser){
        const hashedPassword= await bcrypt.hash(password,10)

        const user = new User({
            name, number,email,password:hashedPassword
        })


        try{
            await user.save()
            res.status(200).json({msg:"Signup Successfull",user})
        }catch(err){
            res.status(200).json({msg:"something went wrong while Saving Data!"})
            console.log(err);
        }
    }

}

module.exports = {
    userSignup,
    userLogin
}