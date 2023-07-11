const axios = require("axios");
const {Pokemon, Type} = require("../../db");

const controllPokemonByName = async(name)=>{
    //Busco al pokemon en la base de datos
    const findPokemon = await Pokemon.findOne({where: { name: name }, include:{
        model: Type,
        attributes: ["name"],
        through: { attributes: [] },
    }});
    //Si existe el pokemon, filtro los datos y lo retorno
    if(findPokemon)return {
        id: findPokemon.id,
        name: findPokemon.name,
        img: findPokemon.img,
        hp: findPokemon.hp,
        damage: findPokemon.damage,
        types: findPokemon.types
    };
    //si no existe en la DB lo busco en la Api
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        damage: data.stats[1].base_stat,
        types: data.types.map(type => {
            return {name: type.type.name}
        })
    };
    //si existe lo devuelvo
    return pokemon;
}

module.exports = controllPokemonByName;