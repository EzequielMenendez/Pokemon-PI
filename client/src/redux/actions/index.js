import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const FILTER_TYPES = "FILTER_TYPES";
export const ORDERED = "ORDERED";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON"
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const RESTORE_POKEMON = "RESTORE_POKEMON";
export const ERROR = "ERROR";
export const RESTORE_ERROR = "RESTORE_ERROR";

//Funcion que obtiene los pokemones segun el origen(All, Api, base de datos)
export const getPokemons = (filter) => {
        return async function(dispatch){
            try {
                if(filter === "All"){
                    const { data } = await axios("http://localhost:3001/pokemons");
                    return dispatch({
                        type: GET_POKEMONS,
                        payload: {
                            origin: filter,
                            data
                        },
                    });
                };
                if(filter === "Api"){
                    const { data } = await axios("http://localhost:3001/pokemons/api");
                    return dispatch({
                        type: GET_POKEMONS,
                        payload: {
                            origin: filter,
                            data
                        },
                    });
                };
                if(filter === "Data Base"){
                    const { data } = await axios("http://localhost:3001/pokemons/db");
                    return dispatch({
                        type: GET_POKEMONS,
                        payload: {
                            origin: filter,
                            data
                        },
                    });
                };
            } catch (error) {
                return dispatch({
                    type: ERROR,
                    payload: {message: error.response.data.error, status: error.response.request.status}
                });
            };
        };
};

//funcion que filtra a los pokemones segun su tipo
export const filterPokemonType = (type) => {
    return async function(dispatch){
        return dispatch({
            type: FILTER_TYPES,
            payload: type
        })
    }
}

//funcion que ordena a los pokemones
export const orderedPokemons = (order) => {
    return async function(dispatch){
        return dispatch({
            type: ORDERED,
            payload: order
        });
    };
};

//función que crea a los pokemones
export const createPokemon = (pokemon) => {
    return async function(dispatch){
        try {
            const { data } = await axios.post(`http://localhost:3001/pokemons`, {
                name: pokemon.name,
                hp: pokemon.hp,
                damage: pokemon.damage,
                defense: pokemon.defense,
                speed: pokemon.speed,
                type: pokemon.types,
                img: pokemon.img
            });
            return dispatch({
                type: CREATE_POKEMON,
                payload: data.id
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: {message: error.response.data.error, status: error.response.request.status}
            });
        }
    }
}

export const deletePokemon = (id) => {
    return async function(dispatch){
        try {
            await axios.delete(`http://localhost:3001/pokemons/${id}`);
            return dispatch({
                type: DELETE_POKEMON,
                payload: id
            })
        } catch (error) {
            
        }
    }
}

//funcion que obtiene al pokemon buscado por nombre
export const getPokemonByName = (name) => {
    return async function(dispatch){
        try {
            const {data} = await axios(`http://localhost:3001/pokemons/name?name=${name}`);
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: {message: error.response.data.error, status: error.response.request.status}
            });
        };
    };  
};

//funcion que elimina la busqueda por nombre
export const restorePokemon = () => {
    return function(dispatch){
        return dispatch({
            type: RESTORE_POKEMON
        });
    };
};

//funcion que obtiene todos los tipos
export const getTypes = () => {
    return async function(dispatch){
        try {
            const { data } = await axios("http://localhost:3001/types");
            return dispatch({
                type: GET_TYPES,
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: {message: error.response.data.error, status: error.response.request.status}
            });
        };
    };
};

//funcion que genera un error
export const generateError = (error) => {
    return function(dispatch){
        return dispatch({
            type: ERROR,
            payload: {message: error.response.data.error, status: error.response.request.status}
        });
    };
};

//funcion que limpia errores
export const restoreError = () => {
    return function(dispatch){
        return dispatch({
            type: RESTORE_ERROR,
        });
    };
};

