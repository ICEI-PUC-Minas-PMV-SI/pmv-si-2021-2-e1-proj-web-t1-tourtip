const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

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
  