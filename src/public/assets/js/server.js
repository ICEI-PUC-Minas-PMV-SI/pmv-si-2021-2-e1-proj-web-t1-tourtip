// create an express app
const express = require("express")
const path = require('path')
const app = express()

// use the express-static middleware
app.use(express.static("src/public"))

// define the first route
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../../index.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));