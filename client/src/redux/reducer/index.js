import ordered from "../../functions/Ordered/ordered";
import { CREATE_POKEMON, ERROR, FILTER_TYPES, GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES, ORDERED, RESTORE_ERROR, RESTORE_POKEMON } from "../actions";

let order = [];

const initialState = { 
    pokemons:[],
    pokemonsByOrigin:[], 
    types:[], 
    pokemonsByTypes: [],
    lastOrigin: '',
    lastOrder: 'Increment id',
    lastType: 'All',
    preName: '',
    lastCreate: '',
    error:''
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            //Este if se ejecuta cuando cargo la pagina por primera vez
            if(!state.pokemonsByOrigin.length){
                return{
                    ...state, 
                    pokemons: action.payload.data, 
                    pokemonsByOrigin: action.payload.data, 
                    pokemonsByTypes: action.payload.data, 
                    lastOrigin: action.payload.origin, 
                };
            };
            //si el filtro por tipo es All, los ordeno
            if(state.lastType === "All"){
                order = ordered(action.payload.data, state.lastOrder);
                return{
                    ...state, 
                    pokemons: order, 
                    pokemonsByOrigin: action.payload.data, 
                    pokemonsByTypes: action.payload.data, 
                    lastOrigin: action.payload.origin,
                    lastCreate: '',
                };
            };
            //si el filtro por tipo no es All aplico el filtro por tipo y los ordeno
            const pokemonsByOrigin = action.payload.data;
            const filter = pokemonsByOrigin.filter(poke => poke.types.some(type => type.name === state.lastType));
            order = ordered(filter, state.lastOrder);
            return {
                ...state, 
                pokemons: order, 
                pokemonsByOrigin, 
                pokemonsByTypes: filter, 
                lastOrigin: action.payload.origin,
                lastCreate: '',
            };
        case FILTER_TYPES:
            const lastType = action.payload;
            //Si el tipo aplicado es distinto a All aplico el filtro correspondiente y ordeno
            if(lastType !== "All"){
                const filter = state.pokemonsByOrigin.filter(poke => poke.types.some(type => type.name === lastType));
                order = ordered(filter, state.lastOrder);
                return{
                    ...state, 
                    pokemons: order, 
                    pokemonsByTypes: order, 
                    lastType, 
                };
            };
            //Si el tipo aplicado es All no aplico filtro y ordeno
            order = ordered(state.pokemonsByOrigin, state.lastOrder);
            return{
                ...state, 
                pokemons: state.pokemonsByOrigin, 
                pokemonsByTypes: state.pokemonsByOrigin, 
                lastType, 
            };
        case ORDERED:
            //ordeno a los pokemones(ordered es una funcion que los ordena);
            order = ordered(state.pokemonsByTypes, action.payload);
            return{
                ...state, 
                pokemons: order, 
                lastOrder: action.payload, 
            };
        case CREATE_POKEMON:
            //actualizo lastCreate con el id del ultimo pokemon creado
            return{
                ...state,
                lastCreate: action.payload,
            };
        case GET_POKEMON_BY_NAME:
            //actualizo pokemon y prename con la info del pokemon buscado
            return{
                ...state, 
                pokemons: [action.payload],
                preName: action.payload.name,
            };
        case RESTORE_POKEMON:
            //elimino la busqueda del pokemon buscado
            return{
                ...state, 
                pokemons: ordered(state.pokemonsByTypes, state.lastOrder),
                preName: '',
            };
        case GET_TYPES:
            //obtengo todos los tipos
            return{
                ...state, 
                types: action.payload, 
            };
        case ERROR:
            //genero un error
            return{
                ...state, 
                error: action.payload,
            };
        case RESTORE_ERROR:
            //elimino el error
        return {
            ...state,
            error: '',
        }
        default:
            return state;
    };
};

export default rootReducer;