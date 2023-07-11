const controllApiPokemons = require("../../controller/PokemonController/controllApiPokemons");
const controllDBPokemons = require("../../controller/PokemonController/controllDBPokemons");

//trae todos los pokemones de la api y la DB
const getAllPokemons = async(req, res)=>{
    try {
        const apiPokemons = await controllApiPokemons();
        const dbPokemon = await controllDBPokemons();
        return res.status(200).json(apiPokemons.concat(dbPokemon));
    } catch (error) {
        return res.status(500).json({error: "server error"});
    }
}

module.exports = getAllPokemons;