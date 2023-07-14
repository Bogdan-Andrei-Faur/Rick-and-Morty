const axios = require("axios");
require("dotenv").config()
const {API_URL} = process.env;

function getById(res, id){
    axios(API_URL + id)
        .then((response) => {
            const {data} = response;
            const character = {
                id: Number(id),
                name: data.name,
                status: data.status,
                species: data.species,
                gender: data.gender,
                origin: data.origin,
                image: data.image
            }

            res.writeHead(200, {"Content-type": "application/json"});
            res.end(JSON.stringify(character));
        })
        .catch(error => {
            res.writeHead(404, {"Content-type": "text/plain"});
            res.end(error.message);
        })
}

module.exports = {
    getById
}