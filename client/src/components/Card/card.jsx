import { DivCard, DivTypes, ImgPoke, ImgType } from "./styledCard";
import fireType from '../../img/AllTypes/fireType.png';
import waterType from '../../img/AllTypes/waterType.png';
import electricType from '../../img/AllTypes/electricType.png';
import normalType from '../../img/AllTypes/normalType.png';
import bugType from '../../img/AllTypes/bugType.png';
import darkType from '../../img/AllTypes/darkType.png';
import dragonType from '../../img/AllTypes/dragonType.png';
import fairyType from '../../img/AllTypes/fairyType.png';
import flyingType from '../../img/AllTypes/flyingType.png';
import ghostType from '../../img/AllTypes/ghostType.png';
import grassType from '../../img/AllTypes/grassType.png';
import groundType from '../../img/AllTypes/groundType.png';
import iceType from '../../img/AllTypes/iceType.png';
import physicType from '../../img/AllTypes/physicType.png';
import poisonType from '../../img/AllTypes/poisonType.png';
import rockType from '../../img/AllTypes/rockType.png';
import shadowType from '../../img/AllTypes/shadowType.png';
import steelType from '../../img/AllTypes/steelType.png';
import unknownType from '../../img/AllTypes/unknownType.png';
import fightingType from '../../img/AllTypes/fightingType.png';

function Card(props){
    //extraigo los tipos que tiene el pokemon
    const types = props.types.map(t => t.name);
    
    return(
        <DivCard>
            <ImgPoke src={props.img}/>
            <h3>{props.name}</h3>
            <DivTypes>
            {types?.map((t) => {
                    return (
                    <ImgType
                    key={t}
                    src={
                        t === "fire"
                        ? fireType
                        : t === "water"
                        ? waterType
                        : t === "electric"
                        ? electricType
                        : t === "normal"
                        ? normalType
                        : t === "bug"
                        ? bugType
                        : t === "dark"
                        ? darkType
                        : t === "dragon"
                        ? dragonType
                        : t === "fairy"
                        ? fairyType
                        : t === "flying"
                        ? flyingType
                        : t === "ghost"
                        ? ghostType
                        : t === "grass"
                        ? grassType
                        : t === "ground"
                        ? groundType
                        : t === "ice"
                        ? iceType
                        : t === "physic"
                        ? physicType
                        : t === "poison"
                        ? poisonType
                        : t === "rock"
                        ? rockType
                        : t === "shadow"
                        ? shadowType
                        : t === "steel"
                        ? steelType
                        : t === "fighting"
                        ? fightingType
                        : unknownType
                    }
                    />
                    );
                    })}
            </DivTypes>
            <p>#{props.id}</p>
        </DivCard>
    )
}

export default Card;