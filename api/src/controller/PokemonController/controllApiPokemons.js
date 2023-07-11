const axios = require("axios");

const controllApiPokemons = async() =>{
    const infoPokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=48");
    //Guardo un arrays de promesas con la url de cada pokemon
    const allPokemon = infoPokemon.data.results.map(pokemon => axios.get(pokemon.url));
    const pokemons = [];
    //Ejecuto las promesas y guardo los datos que me interesen
    await axios.all(allPokemon).then(pokemon =>{
        pokemon.map(({data}) => {
            pokemons.push({
                id: data.id,
                name: data.name,
                img: data.sprites.front_default,
                hp: data.stats[0].base_stat,
                damage: data.stats[1].base_stat,
                types: data.types.map(type => {
                    return {name: type.type.name}
                })
            });
        });
    });
    return pokemons;  
}

module.exports = controllApiPokemons;