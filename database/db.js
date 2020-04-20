const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo_dev",{useNewUrlParser:true,useUnifiedTopology: true },(err)=>{
if(!err) console.log("sucesss...");
else console.log("error");
});
