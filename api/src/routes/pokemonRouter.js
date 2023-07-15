const { Router } = require("express");
const getAllPokemons = require("../handlers/PokemonHandler/getAllPokemons");
const getApiPokemons = require("../handlers/PokemonHandler/getApiPokemons");
const getDbPokemons = require("../handlers/PokemonHandler/getDbPokemons");
const getDetailPokemons = require("../handlers/PokemonHandler/getDetailPokemon");
const postPokemons = require("../handlers/PokemonHandler/postPokemon");
const PokemonByName = require("../handlers/PokemonHandler/getPokemonByName");
const deletePokemons = require("../handlers/PokemonHandler/deletePokemon");

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemons);

pokemonRouter.get("/api", getApiPokemons);

pokemonRouter.get("/db", getDbPokemons);

pokemonRouter.get("/name", PokemonByName);

pokemonRouter.delete("/:id", deletePokemons);

pokemonRouter.get("/:id", getDetailPokemons);

pokemonRouter.post("/", postPokemons);

module.exports = pokemonRouter