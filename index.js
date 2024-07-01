// ask about "Network" tab in VS Code
const express = require("express")
// import express from "express"

const app = express();

// must declare routes before using them
app.use(express.json());

// CRUD operations
const items = ["apples", "hat"];

// READ

//goto server:3030/items
// req = request, res = response
app.get("/items", (req, res) => {
    res.send("items")    
})
// Requests the index of the items
// format goto server:3030/items/[index#]
// e.g. localhost:3030/items/1

app.get('/items/:id', (req, res) => {
//    console.log(req.params.id)
    const id = req.params.id
    res.send(items[id])
})

// CREATE - Post
app.post('/items', (req, res) => {
    const item = req.body.item
    items.push(item)
    res.send(items)
})

// UPDATE - Put
app.put('/items/:id', (req, res) => {
    const id = req.params.id
    // test
    console.log(req.body)
    // nope need:
    console.log(req.body.item)
    items[id] = req.body.item
    res.send(items)
})

// DELETE
app.delete('/items/:id', (req, res) => {
    console.log("We're in the delete route")
    const id = req.params.id
    items.splice(id, 1)
    // send a status code back with the list of items
    res.status(200).send(items)
    // send the list of items
    res.send(items)
})

// app.use(express.static("public"))

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/public/index.html")
})

app.listen(3030, () => {
    console.log("Server is running on port 3030")
})