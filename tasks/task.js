const express=require("express");
var router=express.Router();
const mongoose=require("mongoose");
const Task=require("../model/model");

//get request
router.get('/',(req,res)=>{
    console.log("enter in the get api")
    Task.find((err,docs)=>{
        if(!err){
            console.log("get api");
            res.send(docs)}
        else{console.log("error in retriving data")}
    });
});
//post request
router.post("/post",(req,res)=>{
    console.log("enter in create post")
   
    res.json({ msg: "Hello there all of in create for you",});
    console.log(req.body);
    let users=new Task({
        title:req.body.title,
        description:req.body.description,
        
    });
    users.save()
    .then(() => console.log('Successsss'))
    .catch((err) => {
        console.log('ERRorr- ', err);
})

//console.log(req.body);
});

module.exports=router;
