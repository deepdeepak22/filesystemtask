const fs = require("fs");
const express = require ("express");
const app = express();
const port = 3000;


//Creating File


const timestamp = new Date().toString();
fs.writeFileSync("date-time.txt",timestamp ,(err)=>{
    console.log("complete writing")
});



// using Express


app.listen(port,()=>{
    console.log(`server started at ${port}`)
})
app.get("/date-time",(req,res)=>{
    res.send(`${timestamp}`)
})




//read all files from a folder at a time




fs.readdir("./files",(err,files)=>{
    console.log("file retrieved" , files)
});
