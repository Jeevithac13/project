const express = require("express");
const bodyParser= require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
const User=require("./model/userModel");

const app = express();

const mongoose_url="" ;

mongoose.connect(mongoose_url,{useNewUrlParser: true, useUnifiedTopology: true}).then(arg=>{
    console.log("connected successfully");
})
.catch(error=>{
    console.log("Error");
})


app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/',(req,res)=> {
    res.send('Hello from Server');
})

app.post("/enroll",async (req,res) => { 
    try{
        console.log(req.body);
        let user=new User();
        user.userfirstname=req.body.firstname;
        user.userlastname=req.body.lastname;
        user.useremail=req.body.email; 
        user.userphone=req.body.phone;
        user.userpassword=req.body.password;
        user.userconfirmpassword=req.body.confirmpassword;

       result = await  user.save();
        res.send(result);       
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})