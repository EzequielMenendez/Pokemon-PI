import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../img/pokeLogo.png";
import { DivHeader, DivLinks, ImgLogo, H2 } from "./styledHeader";
import { restoreError } from "../../redux/actions";

function Header(){
    const dispatch = useDispatch();

    const noneDecoration = {
        textDecoration: 'none'
    };

    //cada vez que salga de esta pagina reseteo el error
    const deleteErrors = () =>{
        dispatch(restoreError());
    };

    return(
        <DivHeader>
            <Link to="/home" onClick={deleteErrors}><ImgLogo src={Logo}/></Link>
            <DivLinks>
                <Link to="/home" style={noneDecoration} onClick={deleteErrors}><H2>Home</H2></Link>
                <Link to="/create" style={noneDecoration} onClick={deleteErrors}><H2>Create</H2></Link>
            </DivLinks>
        </DivHeader>
    )
}

export default Header;