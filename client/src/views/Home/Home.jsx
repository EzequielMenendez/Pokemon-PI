import Cards from "../../components/Cards/cards";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/searchBar";
import { ButtonPages, DivContainer, DivLoading, DivPages } from "./styledHome";

function Home(props){
    const {pokemons} = props;
    const [ loading, setLoading ] = useState('Loading...');

    useEffect(() => {
        if(pokemons.length){
            setLoading('Loading...');
        }else{
            const timeout = setTimeout(() => {
                setLoading('Pokemons not found');
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [pokemons]);

    return(
        <DivContainer>
            <SearchBar />
            {/* botones de las paginas */}
            <DivPages>
                <ButtonPages onClick={props.prevHandler}>&lt;&lt;&lt;</ButtonPages>
                <p>{props.currentPage + 1}</p>
                <ButtonPages onClick={props.nextHandler}>&gt;&gt;&gt;</ButtonPages>
            </DivPages>
            {/* Llamo a cards pasandoles los pokemones por pagina */}
            {pokemons.length?<Cards pokemons={pokemons}/>:<DivLoading><p>{loading}</p></DivLoading>}
        </DivContainer>
    );
};

export default Home;