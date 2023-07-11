const controllApiPokemons = require("../../controller/PokemonController/controllApiPokemons");

const getApiPokemons = async(req, res)=>{
    try {
        const pokemonsApi = await controllApiPokemons();
        return res.status(200).json(pokemonsApi);
    } catch (error) {
        return res.status(500).json({error: error.message});
    };
}

module.exports = getApiPokemons;