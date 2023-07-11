import { useState } from "react";
import { DivContainer, ImgTitle, ImgStart, StyledLink } from "./styledLanding";
import pokeballStart from "../../img/pokeballStart.png";
import pokeballClick from "../../img/pokeballClick.png";
import pokeLogo from "../../img/pokeLogo.png"

function LandingPage(){

    const [currentImg, setCurrentImg] = useState(pokeballStart);

    const handleMouseOver = () => {
        setCurrentImg(pokeballClick);
    }
      
    const handleMouseOut = () => {
        setCurrentImg(pokeballStart);
    };
    
    return(
        <DivContainer>
            <ImgTitle src={pokeLogo}/>
            <StyledLink to="/home"><ImgStart src={currentImg} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt="Start"/></StyledLink>
        </DivContainer>
    );
};

export default LandingPage;