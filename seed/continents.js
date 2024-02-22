const db = require('../db')
const { Continent } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const continents = [
    {
      name: "Asia"
    },
    {
      name: "Africa"
    },
    {
      name: "North America"
    },
    {
      name: "South America"
    },
    {
      name: "Antarctica"
    },
    {
      name: "Europe"
    },
    {
      name: "Australia"
    }
  ]

  await Continent.insertMany(continents)
  console.log("Created all seven continents.")
}

const run = async () => {
  await main()
  db.close()
}

run()