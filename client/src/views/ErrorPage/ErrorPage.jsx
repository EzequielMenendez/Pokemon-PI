import { useSelector } from "react-redux"
import { DivCreate } from "./styledError";

function ErrorPage(){
    const error = useSelector((state)=> state.error);
    //si hay algun error muestro el status y el error
    if(error){
        return(
            <DivCreate>
                <h1>Error {error.status}: {error.message}</h1>
            </DivCreate>
        );
    };
    
    return(
        <DivCreate>
            <h1>Error 404: Page Not Found</h1>
        </DivCreate>
    )
};

export default ErrorPage;