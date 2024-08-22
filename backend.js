//WEEK 8 ASSIGNMENT

//SETTING UP SERVER

const express = require("express") //declare express variable using require("express")

const app = express() // declare app variable


const PORT = process.env.PORT || 7000 //declare port number using process.env.PORT

app.listen(PORT, ()=>{    //create a function to indicate your server is running.             
    console.log(`Server running on port ${PORT}`)
})


//CRUD AUTHENTICATION
//CRUD (CREATE(post request), READ(get request), UPDATE(patch), DELETE)

//base server
const welcome = "Welcome to the school server"
app.get("/", (request, response) => {
    response.json(welcome)
})

// get request for student data
let studentData = [ // declared array of students object
    {name: "Ibrahim Musa", age: 30, status: "Active"},
    {name: "Godiya Inusa", age: 28, status: "Active"},
    {name: "Shamsudeen Bukar", age: 29, status: "Active"},
    {name: "Zainab Ibrahim", age: 25, status: "In active"}
]

app.get("/students", (request, response)=>{ // get request
    response.json(studentData) // response
})

//get request for scores
let scores = [80, 90, 70, 50]
app.get("/scores", (request, response) => {
    response.json(scores)
})

//get request for strings

let tracks = ["cyber security", "frontend", "backend", "fullstack" ]

app.get("/tracks", (request, response) => {
    response.json(tracks)
})


