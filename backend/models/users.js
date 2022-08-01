const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{
    versionKey:false,
    timestamps:true
})
    module.exports = model('Users',userSchema)