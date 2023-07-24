//Dotenv
require("dotenv").config();
const {PORT} = process.env;
//Server
const server = require("./app");

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});