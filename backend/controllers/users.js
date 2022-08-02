const { response } = require('express')
const Users = require('../models/users')

const getUser = async(req,res) =>{
    const user = await Users.find()
    res.status(200).json(user)
}

const addUser = async(req,res) =>{
    const user = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }) 
        res.status(201).send(user)
}

const signIn = async (req,res) =>{
    if(req.body.email && req.body.password){
        const user = await Users.findOne(req.body)
        if(user){
            res.send(user)
        }else{
            res.send({message:"user not found"})
        }
    }else{
        res.send({message:"enter correct email and password"})
    }
    
}
module.exports = {
    getUser,
    addUser,
    signIn,
    // deleteUser
}