const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser =require("body-parser")
const morgan = require("morgan")
// const Joi = require("joi");
//middleware to connect json 
app.use(morgan('dev'))//syntax for using morgan
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/sampleDB")
const db = mongoose.connection
//Schema
const user={
  name:String,
  email:String,
  phone:Number,
  age:Number,
  date_of_birth:String,
  address:String,
  pincode:Number
}
const mongModel = mongoose.model("NEWCOLS",user)
//GET
app.get("/api/posts",(req,res)=>{
  mongModel.find({}).exec((err,result)=>{
    if(err) res.json({status:false,message:'unable to fetch the data'})
    else res.json({status:true,message:'user details fetch successfully',data:result})
  })
})
//POST
app.post("/api/posts",(req,res)=>{
    const data = new mongModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
      date_of_birth: req.body.date_of_birth,
      address: req.body.address,
      pincode:req.body.pincode
    });
     data.save((err, result)=>{
      if(err){
        return res.send(err)
      }
         return res.json({ data: result });

    })

})
//PUT
app.get("/api/posts/id",(req,res)=>{
   mongModel.findOneAndUpdate({_id:req.params.age}).exec((err, result) => {
     if (err) res.json({ status: false, message: "unable to fetch the data" });
     else res.json({status: true,message: "user details fetch successfully", data: result,
       });
   });
 })

 app.put("/api/posts/id", (req, res) => {
   mongModel.findOneAndUpdate({ _id: req.params.id},{$set: req.body}).exec((err, result) => {
     if (err) res.json({ status: false, message: "unable to fetch the data" });
     else
       res.json({
         status: true,
         message: "user details fetch successfully",
         data: result,
       });
   });
 });

app.listen(3000,()=>console.log("On port 3000"))
