const express = require("express")
const path = require('path')
const app = express()
module.exports = {
  api_key: process.env.API_KEY
} 
  

app.use(express.static("src/public"))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../../index.html'))
})

app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));