import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../img/pokeFondo.png";

export const DivContainer = styled.div`
  position: relative; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
`;

export const ImgTitle = styled.img`
  position: absolute; 
  top: 14vh;
  width: 500px; 
  height: auto;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute; 
  top: 44%; 
  transform: translateY(-50%); 
`;

export const ImgStart = styled.img`
  width: 80px;
  height: auto;
  @media (max-width: 768px) {
    width: 60px;
  }
`;