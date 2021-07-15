const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');

// var cors=require('cors');
const port=80;
const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const dbURI="mongodb+srv://shivi999:shivani@cluster0.hi83c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('Database Connected'))
.catch((err)=>console.log(err))
// app.use(cors());
app.get("/",(req,res)=>{
    res.send("This is the 'Get' response from server.js");
});
app.post("/",(req,res)=>{
    console.log("req.body in save-products route: ",req.body);
    console.log("Hi again!");
    res.send("This is a 'Post' response from server.js");
});
app.listen(port,()=>{
    console.log(`Node server is running at port ${port}`);
});
