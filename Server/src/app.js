//Express
const express = require('express');
const server = express();
//Morgan
const morgan = require("morgan");
//Cors
const cors = require("cors");
//Routers
const {characterRouter} = require('./routes/character');
const {userRouter} = require('./routes/user');
const {favoriteRouter} = require("./routes/favorites")
//Middlewars
server.use(express.json());
server.use(morgan("dev"));
//Permisos
server.use(cors());
//Routers
server.use("/character", characterRouter);
server.use("/user", userRouter);
server.use("/favorites", favoriteRouter);

server.get("/health-check/:id", (req, res) => {
   res.end("Working");
});

module.exports = server;