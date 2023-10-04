const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User=require("./db/User");
// const connectDB = async ()=>{
//     mongoose.connect("mongodb://localhost:27017/e-comm");
    
// }
app.use(express.json());
app.use(cors());
// app.get("/", (req,res) =>{
//     res.send("App is working");
// });
app.post("/register", async (req,res)=>{
    let user= new User(req.body);
    let result = await user.save();
    result= result.toObject();
    delete result.pass;
    res.send(result);
    // res.send(req.body);
});

app.post("/login", async (req, res)=>{
    if(req.body.pass && req.body.email){
        let user = await User.findOne(req.body).select("-pass");
        if(user){
            res.send(user);
        }
        else{
            res.send({result: "No user found"});
        }
    }else{
        res.send({result: "No user found"});
    }
});

app.listen(5000);