import Cards from "../../components/Cards/cards";
import SearchBar from "../../components/SearchBar/searchBar";
import { ButtonPages, DivContainer, DivPages } from "./styledHome";

function Home(props){
    const {pokemons} = props;
     
    return(
        <DivContainer>
            <SearchBar />
            {/* botones de las paginas */}
            <DivPages>
                <ButtonPages onClick={props.prevHandler}>&lt;&lt;&lt;</ButtonPages>
                <p>{props.currentPage + 1}</p>
                <ButtonPages onClick={props.nextHandler}>&gt;&gt;&gt;   </ButtonPages>
            </DivPages>
            {/* Llamo a cards pasandoles los pokemones por pagina */}
            {props.pokemons.length?<Cards pokemons={pokemons}/>:<p>Loading...</p>}
        </DivContainer>
    );
};

export default Home;