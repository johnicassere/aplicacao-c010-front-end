import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonS = styled(Button)`
background-color: red;
color: #000;
border-radius: 8px;
border: solid 2px;
font-size: 1.5rem;
width: 9rem;
height: 3rem;
`;

export const LogoUt = () => {

const reset = () => {
    localStorage.clear()
}

    return(
        <>
            <Link to="/">
            <ButtonS onClick={reset} >Logout</ButtonS>
            </Link>
            
        </>
    )
}