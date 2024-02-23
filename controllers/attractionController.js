const { Attraction } = require('../models')

const getAllAttractions = async (req, res) => {
    try {
      const attractions = await Attraction.find({})
        res.json(attractions)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAttractionById = async (req, res) => {
  try {
    const attractionId = req.params.attractionId
    // const attractionId = "65d6a09db3f0f1ef1556a90d"
    const attraction = await Attraction.findById(attractionId)
    console.log(attractionId)
    if (attraction) {
      
      return res.json(attraction)
    }
    return res.status(404).send(`Attraction item with the specified ID does not exists`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const getAttractionById = async (req, res) => {
//     try {
//         const { id } = req.params
//         const attractions = await Attraction.findById(id)
//         if (attractions) {
//             return res.json(attractions)
//         }
//         return res.status(404).send('Attractions item with the specified ID does not exists');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const getAttractionByName = async (req, res) => {
//     try {
//         const name = req.query.name
//         const attractions = await Attraction.findOne({ name: name })
//         if (attractions.includes(name)) {
//             return res.send(name)
//         }
//     }catch (error) {
//                 // Handle potential errors, such as database connection issues
//                 return res.status(500).send(error.message);
//             }
// }

// const createAttraction = async (req, res) => {
//     try {
//         const smartHomes = await new SmartHome(req.body)
//         await smartHomes.save()
//         return res.status(201).json({
//           smartHomes
//         })
//     } catch (error) {
//         return res.status(500).json({error: error.message})
//     }
// }



// const updateSmartHome = async (req, res) => {
//     try {
//         let { id } = req.params;
//         let smartHomes = await SmartHome.findByIdAndUpdate(id, req.body, { new: true })
//         if (smartHomes) {
//             return res.status(200).json(smartHomes)
//         }
//         throw new Error("SmartHome item not found")
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

// const deleteSmartHome = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await SmartHome.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send("SmartHome item deleted")
//         }
//         throw new Error("SmartHome item not found")
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

module.exports = {
    getAllAttractions,
    getAttractionById,
    // getSmartHomesByName,
    // createSmartHome,
    // updateSmartHome,
    // deleteSmartHome
}