const express = require("express")
const mongodb = require("mongodb")
const dotenv = require("dotenv")
const app = express()
const path = require('path')

const PORT = 3000

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Start Server
app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})

//Requests
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/flip', (req, res) => {
    let result = Math.round(Math.random())
    console.log(JSON.stringify(new Number(result)))
    console.log(result)
    res.send(JSON.stringify(result.toString()))
})