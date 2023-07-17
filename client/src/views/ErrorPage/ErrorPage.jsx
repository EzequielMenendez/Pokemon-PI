import { useSelector } from "react-redux"
import { DivError } from "./styledError";

function ErrorPage(){
    const error = useSelector((state)=> state.error);
    //si hay algun error muestro el status y el error
    if(error){
        return(
            <DivError>
                <h1>Error {error.status}: {error.message}</h1>
            </DivError>
        );
    };
    
    return(
        <DivError>
            <h1>Error 404: Page Not Found</h1>
        </DivError>
    )
};

export default ErrorPage;