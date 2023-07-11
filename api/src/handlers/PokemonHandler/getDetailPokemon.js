const controllDetailPokemon = require("../../controller/PokemonController/controllDetailPokemon");


//trae el datalle del pokemon por id
const getDetailPokemons = async(req, res)=>{
    const {id} = req.params;
    try {
        const pokemonById = await controllDetailPokemon(id);
        return res.status(200).json(pokemonById);
    } catch (error) {
        res.status(404).json({error: "Pokemon not found"});
    }
}

module.exports = getDetailPokemons;