const e = require("express");
let mongoose=require("mongoose");
let express=require("express");
let app=express();


//DB connection
mongoose.connect("mongodb://0.0.0.0:27017/full_stack") //mongodb://localhost:27017
.then(()=>{
    console.log("DB connected");
})
.catch((error) =>{
    console.log(error);
});
//Test

app.get("/text",(req,res)=>{
    res.send("Hello. I am get API!!!!")
    
});
app.listen(3100, () => {
    console.log("Server Is Running At 3100!!!!")
});
