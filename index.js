const bodyParser = require('body-parser')
const express = require("express")
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000

app.use(bodyParser.json())

// this allows us to use all files in the public folder
app.use(express.static(__dirname + '/public'))

// supabase DB for user information
const supabaseUrl = 'https://lmomegzjxijkiqxhjjfz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtb21lZ3pqeGlqa2lxeGhqamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1NTUzNTAsImV4cCI6MjAxNzEzMTM1MH0.5TKzmamlai1ZLgVJGcpSAMFVty7rJA7mdxeAf1K3ODM'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

// // GET, which serves to retrieve the user database 
// app.get('/users', async (req, res) => {
//     console.log(`Getting User`)

//     const {data, error} = await supabase
//         .from('User')
//         .select();

//     if(error) {
//         console.log(error)
//     } else if(data) {
//         res.send(data)
//     }
// })
// POST, updates the supabase database with user data
app.get('/users', async (red, res) => {
    console.log('getting User')

    const {data, error} = await supabase
        .from('User')
        .select();

    if(error) {
        console.log(error)
    } else if(data) {
            res.send(data)
        }
    })

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

app.listen(port)