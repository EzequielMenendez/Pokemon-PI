import { styled } from "styled-components";

export const DivCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(135,206,235, 0.9);
    width: 250px;
    height: 230px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-family: pokeFont;
    font-size: 13px;
    color: black;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`

export const DivTypes = styled.div`
    display:flex;
    gap: 3px;
`;

export const ImgPoke = styled.img`
    background-color: #ADD8E6;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
`

export const ImgType = styled.img`
    width: 27px;
    height: auto;
`
