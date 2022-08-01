const express = require('express')
const router = express.Router()
const {getMotorcycles} = require('../controllers/motorcycles')

router.get('/', getMotorcycles)

module.exports = router