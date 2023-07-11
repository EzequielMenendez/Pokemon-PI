const controllPokemonByName = require("../../controller/PokemonController/controllPokemonByName");

const PokemonByName = async(req, res)=>{
    const {name} = req.query;
    const minName = name.toLowerCase();
    try {
        const pokemon = await controllPokemonByName(minName);
        return res.status(200).json(pokemon);
    } catch (error) {
        res.status(404).json({error: "the pokemon does not exist"});
    }
}

module.exports = PokemonByName;