const { Pokemon } = require("../../db");

const controllDeletePokemons = async(id)=>{

    await Pokemon.destroy({
        where: {
            id
        }
    });

};

module.exports = controllDeletePokemons;