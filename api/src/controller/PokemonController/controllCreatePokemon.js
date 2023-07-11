const {Pokemon, Type} = require("../../db");

const controllCreatePokemon = async(name, img, hp, damage, defense, speed, type )=>{
    //Creo el Pokemon
    const createdPokemon = await Pokemon.create({ name , img, hp, damage, defense, speed });
    //busco el type que coincida
    const existingTypes = await Type.findAll({
        where: { name: type },
    });
    //Lo relaciono en la tabla types
    await createdPokemon.setTypes(existingTypes);
    const pokemon = await Pokemon.findOne({where: { name }});
    return pokemon.dataValues.id
}

module.exports = controllCreatePokemon;