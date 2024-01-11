const express=require('express')
const cors=require('cors');
const {readdirSync}=require('fs')
const { db } = require('./db/DB.JS');
const Login = require('./models/loginModel');
const app=express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)))

app.get("/login",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try {
        const check=await Login.findOne({email:email})

        if(check){
            if(password===check.password){
                res.status(200).json({msg:"Login Sucessfull"});
            }else{
                res.status(501).json({msg:"Enter Correct Password"});
            }
        }
        else{
            res.status(501).json({msg:"User With This Email Does Not Exists"})
        }
    } catch (e) {
        res.status(501).json({msg:"Internal Server Error"})
    }
})

app.get("/signup",cors(),(req,res)=>{

})
app.post("/signup",async(req,res)=>{
    const{email,username,password}=req.body

    const data={
        email:email,
        password:password,
        username: username,
    }

    try {
        const check=await Login.findOne({email:email})

        if(check){
            res.status(500).json({msg:"User With This Email Already exists"});
        }
        else{
          
            const User = await Login.create(data);
            await User.save();

            res.status(200).json({msg:"User Saved Successfully"});
        }
    } catch (e) {
        res.status(501).json({msg: "Internal Server Error"});
    }
})
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()