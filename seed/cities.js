const db = require('../db')
const { Country, City } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))


const main = async () => {
  // get Countries
  const unitedStates = await Country.findOne({ name: "United States" })
  const unitedKingdom = await Country.findOne({ name: "United Kingdom" })
  const morocco = await Country.findOne({ name: "Morocco" })
  const india = await Country.findOne({ name: "India" })
  const portugal = await Country.findOne({ name: "Portugal" })
  const southAfrica = await Country.findOne({ name: "South Africa" })

  const cities = [
    {
      name: "New York",
      country: unitedStates._id, 
      temperature: null
    },
    {
      name: "London",
      country: unitedKingdom._id,
      temperature: null
    },
    {
      name: "Marrakech",
      country: morocco._id,
      temperature: null
    },
    {
      name: "Cape Town",
      country: southAfrica._id,
      temperature: null
    },
    {
      name: "Agra",
      country: india._id,
      temperature: null
    },
    {
      name: "Lisbon",
      country: portugal._id,
      temperature: null
    }
  ]

  await City.insertMany(cities)
  console.log("Created some cities.")
}

const run = async () => {
  await main()
  db.close()
}

run()