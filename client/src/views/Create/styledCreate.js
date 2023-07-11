import { styled } from "styled-components";
import background from "../../img/pokeFondo.png"

export const DivCreate = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 85vh;
    padding-top: 1px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: pokeFont;
    font-size: 12px;
    @media (max-width: 768px) {
        font-size: 9px;
    }
`;

export const FormCenteredBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(135,206,235, 0.9);
    margin: 0 auto;
    padding: 80px;
    border-radius: 50px;
    @media (max-width: 768px) {
        padding: 30px;
    }
`;

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivTypes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 5px;
    margin-top: 6px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 3px;
    }
`

export const ButtonSelected = styled.button`
    background-color: #00FF7F;
    border-radius: 5px;
    width: 80px;
    height: 30px;
    font-family: pokeFont;
    font-size: 8px;
    @media (max-width: 768px) {
        width: 75px;
        height: 20px;
    };
`;

export const Button = styled.button`
    background-color: #ED1B24;
    border-radius: 5px;
    width: 80px;
    height: 30px;
    font-family: pokeFont;
    font-size: 8px;
    @media (max-width: 768px) {
        width: 75px;
        height: 20px;
    };
`;

export const InputName = styled.input`
    border-radius: 5px;
    font-family: pokeFont;
    font-size: 12px;
    @media (max-width: 768px) {
        font-size: 9px;
    };
`;