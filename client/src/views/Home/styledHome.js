import {styled, keyframes} from 'styled-components';
import background from "../../img/pokeFondo.png"

export const DivContainer = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 87vh;
    background-position: center;
    font-family: pokeFont;
`;

export const DivPages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const hoverAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
`;

export const ButtonPages = styled.button`
    background-color: #ED1B24;
    color: 	#FFD700;
    border: none;
    margin-left: 15px;
    margin-right: 15px;
    width: 60px;
    height: 25px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: transform 0.3s;
    animation: ${hoverAnimation} 0.3s ease-in-out;

    &:hover {
    transform: scale(1.1);
  }
`