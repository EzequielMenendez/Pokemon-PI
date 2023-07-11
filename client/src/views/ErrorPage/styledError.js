import { styled } from "styled-components"
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
`;