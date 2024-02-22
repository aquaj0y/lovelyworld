const db = require('../db')
const { Continent, Country } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  // get seven continents
  const asia = await Continent.findOne({ name: "Asia" })
  const africa = await Continent.findOne({ name: "Africa" })
  const northAmerica = await Continent.findOne({ name: "North America" })
  const southAmerica = await Continent.findOne({ name: "South America" })
  const antarctica = await Continent.findOne({ name: "Antarctica" })
  const europe = await Continent.findOne({ name: "Europe" })
  const australia = await Continent.findOne({ name: "Australia" })

  const countries = [
    {
      name: "Australia",
      language: ["English"],
      continent: australia._id
    },
    {
      name: "New Zealand",
      language: ["English"],
      continent: antarctica._id
    },
    {
      name: "Brazil",
      language: ["Portugues"],
      continent: southAmerica._id
    },
    {
      name: "United States",
      language: ["English"],
      continent: northAmerica._id
    },
    {
      name: "United Kingdom",
      language: ["English"],
      continent: europe._id
    },
    {
      name: "Morocco",
      language: ["Arabic", "Berber"],
      continent: africa._id
    },
    {
      name: "India",
      language: ["Hindi"],
      continent: asia._id
    },
    {
      name: "Portugal",
      language: ["Portuguese"],
      continent: europe._id
    },
    {
      name: "South Africa",
      language: ["English", "Afrikaans"],
      continent: africa._id
    }
  ]

  await Country.insertMany(countries)
  console.log("Created countries.")
}

const run = async () => {
  await main()
  db.close()
}

run()