const {Pokemon, Type} = require("../../db");

const controllDBPokemons = async()=>{
    //Busco todos los pokemones de la db
    const dbPokemon = await Pokemon.findAll({include: {
        model: Type,
        attributes: ["name"],
        through: { attributes: [] },
    }});
    //obtengo los datos que necesito
    const filterDb = dbPokemon.map(pokemon=>{
        return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.img,
        hp: pokemon.hp,
        damage: pokemon.damage,
        types: pokemon.types
        }
    })
    return filterDb;
}

module.exports = controllDBPokemons;