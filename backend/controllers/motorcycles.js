const Motorcycles = require('../models/motorcycles')

const getMotorcycles = async(req,res) =>{
    const bikes = await Motorcycles.find()
    res.status(200).json(bikes)
}

module.exports = {getMotorcycles}