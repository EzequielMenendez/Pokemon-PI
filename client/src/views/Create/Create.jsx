import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validate from "../../functions/Validate/validate";
import { ButtonSelected, Button, DivCreate, FormCenteredBox, DivInputs, DivTypes, InputName, ButtonCreate } from "./styledCreate";
import { createPokemon } from "../../redux/actions";

function Create(){

    const dispatch = useDispatch();
    const allTypes = useSelector((state)=> state.types);

    //creo un estado local para crear un pokemon mediante el formulario
    const [ newPokemon, setNewPokemon ] = useState({
        name: '',
        hp: 100,
        damage: 100,
        defense: 100,
        speed: 100,
        types: [],
        img: ''
    });
    //creo un estado local para el manejo de errores
    const [ errors, setErrors ] = useState({ initialState: 1});
    //creo un estado local para mostrar un mensaje
    const [ creating, setCreating ] = useState('');

    //Logica para actualizar el estado del pokemon mediante el formulario
    const handleChange = (event) => {
        setNewPokemon({ ...newPokemon, [event.target.name]: event.target.value});
        setErrors(validate({...newPokemon, [event.target.name]: event.target.value}));
    };

    //logica para controlar los tipos del pokemon mediante el formulario
    const handleTypeSelection = (typeName) => {
        if (newPokemon.types.includes(typeName)) {
            // Si el tipo ya está en el array, lo eliminamos
            const updatedTypes = newPokemon.types.filter((type) => type !== typeName);
            setNewPokemon({ ...newPokemon, types: updatedTypes });
            setErrors(validate({ ...newPokemon, types: updatedTypes}));
        }else {
            // Si el tipo no está en el array, lo agregamos
            const updatedTypes = [...newPokemon.types, typeName];
            setNewPokemon({ ...newPokemon, types: updatedTypes });
            setErrors(validate({ ...newPokemon, types: updatedTypes }));
        }
    };

    //se ejecuta cuando envio el formulario
    const handleSubmit = async (event)=>{
        event.preventDefault();
        //creo al pokemon
        dispatch(createPokemon(newPokemon));
        //actualizo los estados
        setCreating('Creating Character...');
        setNewPokemon({
            name: '',
            hp: 100,
            damage: 100,
            defense: 100,
            speed: 100,
            types: [],
            img: ''
        });
        setErrors({ initialState: 1});
    };

    return(
        <DivCreate>
            <h2>Create your Pokemon!</h2>
            <FormCenteredBox onSubmit={handleSubmit}>
                <DivInputs>
                    <label>Name:</label>
                    <InputName type="text" name="name" value={newPokemon.name} onChange={handleChange}></InputName>
                    {errors.name?<p>{errors.name}</p>:null}
                </DivInputs>
                <DivInputs>
                    <label>HP:</label>
                    <input type="range" min={10} max={200} name="hp" value={newPokemon.hp} onChange={handleChange}></input>
                    <p>{newPokemon.hp}</p>
                    {errors.hp?<p>{errors.hp}</p>:null}
                </DivInputs>
                <DivInputs>
                    <label>Damage:</label>
                    <input type="range" min={10} max={200} name="damage" value={newPokemon.damage} onChange={handleChange}></input>
                    <p>{newPokemon.damage}</p>
                    {errors.damage?<p>{errors.damage}</p>:null}
                </DivInputs>
                <DivInputs>
                    <label>Defense:</label>
                    <input type="range" min={10} max={200} name="defense" value={newPokemon.defense} onChange={handleChange}></input>
                    <p>{newPokemon.defense}</p>
                    {errors.defense?<p>{errors.defense}</p>:null}
                </DivInputs>
                <DivInputs>
                    <label>Speed:</label>
                    <input type="range" min={10} max={200} name="speed" value={newPokemon.speed} onChange={handleChange}></input>
                    <p>{newPokemon.speed}</p>
                    {errors.speed?<p>{errors.speed}</p>:null}
                </DivInputs>
                <label>Types:</label>
                <DivTypes>
                    {/* inserto los botones segun la cantidad de tipos y cambio los estilos del boton dependiendo si esta seleccionado o no */}
                    {allTypes.map((t) => (
                        newPokemon.types.includes(t.name) ? (
                        <ButtonSelected key={t.id} onClick={() => handleTypeSelection(t.name)}>
                        {t.name}
                        </ButtonSelected>
                        ) : (
                        <Button key={t.id} onClick={() => handleTypeSelection(t.name)}>
                        {t.name}
                        </Button>
                        )
                    ))}
                </DivTypes>
                {errors.types?<p>{errors.types}</p>:null}
                <DivInputs>
                    <label>Image:</label>
                    <input type="text" name="img" value={newPokemon.img} onChange={handleChange} placeholder="insert url image(optional)"></input>
                    {errors.img?<p>{errors.img}</p>:null}
                </DivInputs>
                <div>
                    {/* si existe algun error no muestro el boton de enviar */}
                    {Object.keys(errors).length ? null : <ButtonCreate type="submit">Create Pokemon</ButtonCreate>}
                </div>
            </FormCenteredBox>
            <h3>{creating}</h3>
        </DivCreate>
    );
};

export default Create;