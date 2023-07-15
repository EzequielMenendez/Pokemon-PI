const controllDeletePokemon = require("../../controller/PokemonController/controllDeletePokemons");

const deletePokemons = async(req, res)=> {
    const {id} = req.params;
    try {
        await controllDeletePokemon(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({error: "Server Error"});
    };
};

module.exports = deletePokemons