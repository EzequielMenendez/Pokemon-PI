const controllDBPokemons = require("../../controller/PokemonController/controllDBPokemons");

const getDbPokemons = async(req, res)=>{
    try {
        const PokemonsDB = await controllDBPokemons();
        if(!PokemonsDB.length)return res.status(404).json({error: "there are no pokemon in the database"});
        return res.status(200).json(PokemonsDB);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = getDbPokemons;