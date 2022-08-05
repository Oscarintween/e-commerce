const Users = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createToken = (_id) =>{
    return jwt.sign({_id},process.env.ACCESS_TOKEN)
}


const getUser = async(req,res) =>{
    const user = await Users.find()
    res.status(200).json(user)
}

const addUser = async(req,res) =>{
    const {name, email,password} = req.body
    try {
        const user = await Users.create({name,email,password}) 
    //=====create the token for user=============
        const token = createToken(user._id)
        res.status(201).json({name,email,token})
    } catch (error) {
        res.status(400).send('user was not created')
    }      
}

const signIn = async (req,res) =>{
    const {email,password} = req.body
    if(!email || !password){
        res.json({message:'missing email or password'})
        throw Error('All fields must be filled') 
    }
        const user = await Users.findOne({email})
        const name = user.name
        const validUser = await bcrypt.compare(password,user.password)
        if(validUser){
            const token = createToken(user._id)
            res.status(200).json({name,email,token})
        }else{
            res.status(400).json({message:"invalid email or password"})
        }
        
}
    

    
module.exports = {
    getUser,
    addUser,
    signIn,
    // deleteUser
}