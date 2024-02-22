const { City } = require('../models')

const getAllCity = async (req, res) => {
    try {
      const cities = await City.find({})
        res.json(cities)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
  getAllCity
}