const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const attractionController = require('./controllers/attractionController')
const cityController = require('./controllers/cityController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => res.send("This is our landing page!"));

app.get("/attraction", attractionController.getAllAttractions)
app.get('/city', cityController.getAllCity)



// app.get('/attraction-detail/:attractionId', (req, res) => {
//   res.sendFile(path.join(__dirname, 'path_to/attraction-detail.html'));
// });

app.get('/attraction-detail/:attractionId', attractionController.getAttractionById);
