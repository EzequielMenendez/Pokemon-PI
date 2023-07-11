import { styled } from "styled-components";
import background from "../../img/pokeFondo.png";

export const DivDetail = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 85vh;
    padding-top: 1px;
    display: flex;
    align-items: center;
    font-family: pokeFont;
    font-size: 14px;
`;

export const DivCenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(135,206,235, 0.9);
  margin: 0 auto;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 50px;
  @media (max-width: 768px) {
    padding: 0px;
    border-radius: 10px;
  }
`;

export const ImgPoke = styled.img`
  width: 150px;
  height: auto;
`;

export const ImgType = styled.img`
  width: 50px;
  height: auto;
`;

export const DivTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;