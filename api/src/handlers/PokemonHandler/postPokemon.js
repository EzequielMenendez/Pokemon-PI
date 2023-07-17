const controllExistPokemon = require("../../controller/PokemonController/controllExistPokemon");
const controllCreatePokemon = require("../../controller/PokemonController/controllCreatePokemon");

const newImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png";

//verifico si el pokemon existe en la api o en la base de datos
const postPokemons = async(req, res)=>{
    const { name } = req.body;
    if(!name)return res.status(400).json({error: "Parameter required to create the pokemon are missing"});
    const minName = name.toLowerCase();
    try {
        //si el pokemon existe lanzo un error
        const exist = await controllExistPokemon(minName);
        if(exist)return res.status(400).json({error: `${minName} pokemon already exists`});
    } catch (error) {
        //si el pokemon no existe llamo a la funcion de crear pokemones
        createPokemons(req, res);
    }
}

//crea un nuevo pokemon en la base de datos
const createPokemons = async(req, res)=>{
    const { name, img, hp, damage, defense, speed, type } = req.body;
    try {
        if(!name || !hp || !damage || !defense || !speed || !type )return res.status(400).json({error: "Parameter required to create the pokemon are missing"});
        const minName = name.toLowerCase();
        if(!img){
            const id = await controllCreatePokemon(minName, newImg , hp, damage, defense, speed, type);
            return res.status(201).json({id});
        };
        const id = await controllCreatePokemon(minName, img, hp, damage, defense, speed, type);
        return res.status(201).json({id});
    } catch (error) {
        res.status(500).json({error: "Server Error"});
    }
}

module.exports = postPokemons;