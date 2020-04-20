const express = require('express')
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
app.use(express.json())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/fetchContext', function (req, res) {
    const url = req.body.url
    textapi.sentiment({
        url: url
    }, (error, json) => {
        const { polarity, subjectivity } = json
        const context = `This article's polarity is ${polarity} and it's subjectivity is ${subjectivity}.`
        res.send({
            context: context
        })
    })

})

const port = 8080
app.listen(port, function () {
    console.log(`News Article NLP app listening on port ${port}!`)
})
