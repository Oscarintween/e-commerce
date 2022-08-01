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
module.exports = {
    getUser,
    addUser,
    // updateUser,
    // deleteUser
}