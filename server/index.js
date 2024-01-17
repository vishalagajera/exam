require("./db")
const express = require("express");
const data = require("./model");
const cors = require("cors")
const app = express()
const jwt = require("jsonwebtoken")
const key = "jobduniya"
// 
app.use(cors())
app.use(express.json())


// user registration api 
app.post("/add", async (req, res) => {
    const finaldata = new data(req.body);
    data.insertMany(finaldata).then((e) => {
        res.status(201).send(e);
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Login Authentication api 
app.post("/login", async (req, res) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let auth = await data.findOne(req.body).select("-password")
        if (auth) {
            jwt.sign({auth} , key ,{expiresIn : "1d"} ,(err , token) => {
                    err ? res.send("something went wrong")  : res.send( {auth , token  : token})
            } ) 
        }
        else {
            res.send({ result: "User  not found" })
        }
    }
    else {
        res.send({ result: "Something Missing" });
    }
})

// get all users 

const verifyToken  = (req , res ,next) => {
    let token = req.headers['authorization']
    console.warn("called ", token);
    if (token) {
        jwt.verify(token , key , (err , valid) =>{
            err?  res.send({ unauthorized : "invalid token"})  : next()
        })
    }
    else{
        res.send({ result : "provide a token from headers"})
    }
}

app.get("/users" , verifyToken , async (req , res) => {
    const users =  await data.find().select("-password");
    res.send(users);
})
app.get("/checkisvalid" , verifyToken , async (req ,res)  => {
    res.send({ authorized : "You are Authorized"});
})




app.listen(5500, () => console.log("server started..."))