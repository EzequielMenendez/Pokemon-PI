const controllDeletePokemons = require("../../controller/PokemonController/controllDeletePokemons");

const deletePokemons = async(req, res)=>{
    const {id} = req.params;
    try {
        await controllDeletePokemons(id);
        return res.status(200).json({message: "deleted successfully"});
    } catch (error) {
        return res.status(500).json({error: "Server Error"});
    };
};

module.exports = deletePokemons