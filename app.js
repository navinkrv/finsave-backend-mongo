const express= require("express")
const mongoose=require("mongoose")
const userRouter = require("./routes/user-routes")

const app= express()


// middlerwares

app.use(express.json())
app.use("/api/user",userRouter)

mongoose.connect("mongodb+srv://navinkey5:PMH4S6jVVtOTRGrh@cluster0.lus7jg4.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(5000,function(){
    console.log("db connected & Server is runnning");
})
})
.catch((err)=>{
    console.log(err);
})




