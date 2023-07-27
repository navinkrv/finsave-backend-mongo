const express= require("express")
const mongoose=require("mongoose")
const userRouter = require("./routes/user-routes")

const app= express()


// middlerwares

app.use(express.json())
app.use("/api/user",userRouter)

mongoose.connect("mongodb+srv://techiesgateway:dMR7rINpRkyJVhS7@cluster0.mwhjzfb.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(5000,function(){
    console.log("db connected & Server is runnning");
})
})
.catch((err)=>{
    console.log(err);
})




