const express = require("express");
const router = express();
const  Register = require("../models/Register")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//Sign Up 
router.post("/signup",async(req,res)=>{
    try {
       const {FName,LName, Email,Password,Number } = req.body;
      const response =   await Register.create({
           FName,LName , Email,Password,Number
       })
       const id = response._id;
       const Token = jwt.sign({_id:id},process.env.Sectet_Key1);
       res.status(202).json({Token,id});
    } catch (error) {
        console.log(error);
       res.status(404).send(error);
    }
   })

//Login
router.post("/login",async(req,res)=>{
    try {
        const {Email,Password} = req.body;
        const result = await Register.findOne({Email});
        if(result!=null){
            const UserPassword = result.Password;
            const id = result._id;
            const Name = result.FName;
          const check = await bcrypt.compare(Password,UserPassword);
          if(check === true){
            const Token = jwt.sign({_id:id},process.env.Sectet_Key1);
            //res.status(202).json({Token,Name,id})

            res.status(202). json( {
              id: id,
              name: Name,
              email: result.Email,  
              Token: Token,
            });
          }
          else{
            res.status(404).send("Invalid Password...")
          }
        }
        else{
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(404);

    }
})

module.exports = router;