const axios = require("axios");
require("dotenv").config()
const {API_URL} = process.env;

function getCharById(req, res){
    const {id} = req.params;
    axios(`${API_URL}${id}`)
        .then(({data}) => {
            if (data.error){
                return res.status(404).send(data.error);
            }
            
            const character = {
                id: Number(data.id),
                name: data.name,
                status: data.status,
                species: data.species,
                gender: data.gender,
                origin: data.origin.name,
                image: data.image
            }
            
            return res.status(200).json(character);
        })
        .catch((axiosError) => {
            return res.status(500).send(axiosError.message)
        })
}

module.exports = {
    getCharById
}