const express = require('express')
const router = express.Router()
const {getUser,addUser} = require('../controllers/users')

router.get('/', getUser)

router.post('/register',addUser)
// router.updateUser('/',updateUser)
// router.deleteUser('/',deleteUser)


module.exports = router