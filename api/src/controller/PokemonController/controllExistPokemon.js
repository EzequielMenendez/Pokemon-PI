const axios = require("axios");
const {Pokemon} = require("../../db");

const controllExistPokemon = async(name)=>{
    if(!name)return res.status(400).json({error: "Parameter required to create the pokemon are missing"});
    //verifico que el pokemon este en la db
    const findPokemonDB = await Pokemon.findOne({where : { name }});
    if(findPokemonDB)return findPokemonDB;
    //verifico que el pokemon este en la api
    const findPokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return findPokemonApi;
};

module.exports = controllExistPokemon;