// INITIALIZATION
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose");

require("dotenv").config();
const { DB_URI, SECRET_KEY } = process.env;
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./models/user");

// MIDDLEWARE
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// DATABASE CONNECTION / SERVER LISTENER
mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Database connected\nServer listening on ${port}`);
      console.log(new Date(Date.now()));
    });
  })
  .catch((error) => console.log(error.message));

// ROUTES
// root
server.get("/", (request, response) => {
  response.send("Server is live.");
});
