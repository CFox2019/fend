const express = require('express')
const mockAPIResponse = require('./mockAPI')
const aylien = require('aylien_textapi')
const dotenv = require('dotenv');
dotenv.config();

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const port = 8080
app.listen(port, function () {
    console.log(`News Article NLP app listening on port ${port}!`)
})
