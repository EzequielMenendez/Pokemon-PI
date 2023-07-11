const axios = require("axios");
const {Pokemon, Type} = require("../../db");

const controllDetailPokemon = async(id)=>{
    //Evaluo si el id es un UUID
    if(isNaN(Number(id))){
        //Busco al pokemon en la db y le incluyo el type
        const findPokemon = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ["name"],
                through: { attributes: [] },
            }
        });
        return findPokemon;
    }
    //Busco al pokemon en la api
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = {
        id: id,
        name: data.name,
        img: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        damage: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        types: data.types.map(type=> {
            return { name: type.type.name}
        }),
    }
    return pokemon;
}

module.exports = controllDetailPokemon;