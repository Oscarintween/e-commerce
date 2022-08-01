const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/db')

app.use(cors())
connectDB()
app.use(express.json())
app.use('/motorcycles',require('./routes/motorcycle'))
app.use('/user',require('./routes/users'))
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})