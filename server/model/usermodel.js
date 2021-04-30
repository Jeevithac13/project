const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    userfirstname:{ type:String, required },
    userlastname:{ type:String, required },
    useremail :{ type:String, required },
    userphone:{ type:String, required  },
    userpassword : { type:String, required },
    userconfirmpassword : { type:String, required }
})

const userModel=new mongoose.model("Employeedetails",userSchema);


module.exports=userModel;