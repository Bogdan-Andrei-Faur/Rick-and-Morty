const http = require("http");
require("dotenv").config();
const {PORT} = process.env;
const {getById} = require("./controllers/getCharById.js");


http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const id = request.url.split("/").at(-1);

    if (request.url.includes("onsearch")){
        return getById(response, id);
    }

    if (request.url.includes("detail")){
        return getById(response, id);
    }

}).listen(PORT, () => {
    console.log("Server running OK on " + PORT);

})