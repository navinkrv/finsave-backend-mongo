const mongoose= require("mongoose")

const Schema= mongoose.Schema;

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    
    },
    number:{
        type:Number,
        required:true,
        unique:true
    
    },
    password:{
        type:String,
        required:true,
        minlength:6
    
    },
    college:{
        type:String,
        required:true,
        
    
    },
    course:{
        type:String,
        required:true,
       
    
    },
    sem:{
        type:Number,
        required:true,
      
    
    },
})

module.exports =mongoose.model("User",userSchema);
