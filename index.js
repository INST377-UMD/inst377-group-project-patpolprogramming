const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const port = 4000

app.use(bodyParser.json())

// this allows us to use all files in the public folder
app.use(express.static(__dirname + '/public'))

// GET, which serves the index.html page
app.get("/home.html", (req, res) => {
    res.sendFile("public/html/home.html", { root: __dirname })
})

// GET, which serves the about.html page  
app.get("/about.html", (req, res) => {
    res.sendFile("public/html/about.html", { root: __dirname })
})

// GET, which serves the data.html page
app.get("/data.html", (req, res) => {
    res.sendFile("public/html/data.html", { root: __dirname })
})

// GET, which serves the help.html page
app.get("/help.html", (req, res) => {
    res.sendFile("public/html/help.html", { root: __dirname })
})

// example GET endpoint, which returns the current date
app.get("/current_date", (req, res) => {
    res.send(new Date())
})

app.listen(port)