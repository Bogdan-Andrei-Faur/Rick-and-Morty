const axios = require("axios");
require("dotenv").config()
const {API_URL} = process.env;

async function getCharById(req, res){
    const {idChar} = req.params;
    
    try {
        const apiRequest = await axios(`${API_URL}${idChar}`);
        const {data} = apiRequest;
        
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
    
    } catch (axiosError) {
        return res.status(500).send(axiosError.message);
    }
}

module.exports = {
    getCharById
}