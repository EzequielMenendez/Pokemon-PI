import { styled } from "styled-components";

export const DivSearchBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 10px;
`

export const InputSearch = styled.input`
    width: 200px;
    height: 22px;
    background-color: #ADD8E6;
    border: 0.1px solid black;
    border-radius: 8px;
    font-family: pokeFont;

    @media (max-width: 768px) {
        width: 140px;
        font-size: 10px;
    }
`;

export const ButtonSearch = styled.button`
    background-color: #ED1B24;
    font-family: pokeFont;
    font-size: 12px;
    color: #FFD700;
    width: 88px;
    height:27px;
    border-radius: 5px;
    @media (max-width: 768px) {
        width: 80px;
        font-size: 10px;
    }
`;

export const ButtonName = styled.button`
    background-color: #ED1B24;
    font-family: pokeFont;
    font-size: 12px;
    color: #FFD700;
    width: 120px;
    height:33px;
    border-radius: 5px;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const DivName = styled.div`
    display: flex;
    justify-content: center;
`

export const SelectFilter = styled.select`
    background-color: #1E90FF;
    font-family: pokeFont;
    color: #FFD700;
    font-size: 12px;
    height:22px;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`