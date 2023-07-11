import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonByName, restorePokemon, filterPokemonType, orderedPokemons } from "../../redux/actions";
import { ButtonName, ButtonSearch, DivName, DivSearchBar, InputSearch, SelectFilter } from "./styledSearBar";

function SearchBar(){
    const dispatch = useDispatch();
    //Me suscribo a los estados que necesite
    const allTypes = useSelector((state) => state.types);
    const pokemons = useSelector((state) => state.pokemons);
    const lastOrigin = useSelector((state) => state.lastOrigin);
    const lastType = useSelector((state) => state.lastType);
    const lastOrder = useSelector((state) => state.lastOrder);
    const preName = useSelector((state) => state.preName);

    //creo un estado local para la search bar
    const [ name, setName ] = useState('');

    //al cargar el componente traigo a los pokemones con los ultimos filtros aplicados
    useEffect(async()=>{
        await dispatch(getPokemons(lastOrigin));
        //si habia un personaje buscado lo devuelvo
        if(preName){
            dispatch(getPokemonByName(preName));
        };
    },[]);

    //Funciones para la busqueda por nombre:
    const handleChange = (event) =>{
        setName(event.target.value);
    };
    const handleReset = () =>{
        dispatch(restorePokemon());
    }
    const handleSearch = ()=>{
        dispatch(getPokemonByName(name));
        setName('');
    };

    //Funcion para filtrar por origen:
    const filterOrigin = (event)=>{
        const filter = event.target.value;
        dispatch(getPokemons(filter));
        dispatch(restorePokemon());
    };

    //Funcion pata filtrar por tipo:
    const filterType = (event) => {
        const filter = event.target.value;
        dispatch(filterPokemonType(filter));
        dispatch(restorePokemon());
    };

    //Función para ordenar:
    const ordered = (event) => {
        const order = event.target.value;
        dispatch(orderedPokemons(order));
        dispatch(restorePokemon());
    };

    return(
        <div>
            <DivSearchBar>
                <div>
                    <SelectFilter onChange={filterOrigin} value={lastOrigin}>
                        <option>All</option>
                        <option>Api</option>
                        <option>Data Base</option>
                    </SelectFilter>
                    <SelectFilter onChange={filterType} value={lastType}>
                        <option>All</option>
                        {allTypes.map(t => <option key={t.id}>{t.name}</option>)}
                    </SelectFilter>
                </div>
                <div>
                    <InputSearch type="text" name="SearchBar" value={name} onChange={handleChange}/>
                    <ButtonSearch onClick={handleSearch}>Search</ButtonSearch>
                </div>
                <SelectFilter onChange={ordered} value={lastOrder}>
                    <option>Increment id</option>
                    <option>Decrement id</option>
                    <option>Alphabetically</option>
                    <option>damage</option>
                    <option>hp</option>
                </SelectFilter>
            </DivSearchBar>
            {/* Si busque correctamente al pokemon por la search bar, agrego un boton para eliminar la busqueda */}
            <DivName>
                {pokemons.length === 1 && pokemons[0].name === preName ?<ButtonName onClick={handleReset}>{pokemons[0].name} x</ButtonName>:<></>}
            </DivName>
        </div>
    )
}

export default SearchBar;