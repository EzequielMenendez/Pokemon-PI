import Card from "../Card/card"
import { Link } from "react-router-dom"
import { DivCards } from "./styledCards"

function Cards(props){
    const noneDecoration = {
        textDecoration: 'none'
    };

    //genero una card por cada pokemon
    return(
        <DivCards>
            {props.pokemons.map((elemento)=>(
                <Link key={elemento.id} to={`/detail/${elemento.id}`} style={noneDecoration}>
                    <Card 
                    id={elemento.id}
                    name={elemento.name}
                    img={elemento.img}
                    hp={elemento.hp}
                    damage={elemento.damage}
                    types={elemento.types}
                    />
                </Link>
            ))}
        </DivCards>
    )
}

export default Cards