const { Pokemon } = require("../../db");

const controllDeletePokemon = async(id)=>{
    await Pokemon.destroy({where: {id}});
}

module.exports = controllDeletePokemon;