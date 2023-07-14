import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { generateError } from '../../redux/actions';
import { DivCenteredBox, DivDetail, DivTypes, ImgPoke, ImgType } from './styledDetail';
//importación de imagenes para los types
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

function Detail(){
    const dispatch = useDispatch();
    const { id } = useParams();
    //creo un estado local para guardar al pokemon
    const [ pokemon, setPokemon ] = useState([]);

    useEffect(async()=>{
        try {
            //busco al pokemon por id y lo guardo en el estado pokemon
            const { data } = await axios(`http://localhost:3001/pokemons/${id}`);
            setPokemon(data);
        } catch (error) {
            dispatch(generateError(error));
        }
    },[]);

    return(
        <DivDetail>
            <DivCenteredBox>
                <ImgPoke src={pokemon.img}/>
                <p>Name: {pokemon.name}</p>
                <p>Hit Points: {pokemon.hp}</p>
                <p>Damage: {pokemon.damage}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Speed: {pokemon.speed}</p>
                <p>Types:</p>
                <DivTypes>
                    {pokemon.types?.map((t) => {
                    return (
                    <ImgType
                    key={t.name}
                    src={
                        t.name === "fire"
                        ? fireType
                        : t.name === "water"
                        ? waterType
                        : t.name === "electric"
                        ? electricType
                        : t.name === "normal"
                        ? normalType
                        : t.name === "bug"
                        ? bugType
                        : t.name === "dark"
                        ? darkType
                        : t.name === "dragon"
                        ? dragonType
                        : t.name === "fairy"
                        ? fairyType
                        : t.name === "flying"
                        ? flyingType
                        : t.name === "ghost"
                        ? ghostType
                        : t.name === "grass"
                        ? grassType
                        : t.name === "ground"
                        ? groundType
                        : t.name === "ice"
                        ? iceType
                        : t.name === "psychic"
                        ? physicType
                        : t.name === "poison"
                        ? poisonType
                        : t.name === "rock"
                        ? rockType
                        : t.name === "shadow"
                        ? shadowType
                        : t.name === "steel"
                        ? steelType
                        : t.name === "fighting"
                        ? fightingType
                        : unknownType
                    }
                    />
                    );
                    })}
                </DivTypes>
                <p>#{id}</p>
            </DivCenteredBox>
        </DivDetail>
    );
};

export default Detail;