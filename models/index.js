const mongoose = require('mongoose')
const AttractionSchema = require('./attraction')
const CitySchema = require('./city')
const CountrySchema = require('./country')
const ContinentSchema = require('./continent')

const Attraction = mongoose.model('Attraction', AttractionSchema)
const City = mongoose.model('City', CitySchema)
const Country = mongoose.model('Country', CountrySchema)
const Continent = mongoose.model('Continent', ContinentSchema)

module.exports = {
  Attraction,
  City,
  Country,
  Continent
}