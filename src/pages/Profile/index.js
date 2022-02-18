import { useEffect, useState } from "react";
import { Container,Alert } from "react-bootstrap";
import { PageTitle } from '../../components/PageTitle/index';
import { FormS } from "../../components/FormS";
import { LogoUt } from "../../components/Logout/logout";
import axios from "axios";
import styled from "styled-components";


const ProfilArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 4rem;

img{
    width: 10rem;
    border-radius: 50%;
}
`;


export const Profile = () => {
const [user, setUser] = useState({});
const [logged, setLogged] = useState(false);
const [showError, setShowError] = useState(false);

useEffect(() => {
    const token = localStorage.token;

    if(!token){
        setLogged(false);
        setShowError(true);
    }

    const config = {
        headers: { Authorization: `Bearer ${token}`},
    };

    axios.get('/auth', config).then((response) => {
        setLogged(true);
        setUser(response.data)
    })
},[logged])

return(
    
    <FormS>
        <PageTitle>Perfil</PageTitle>
    <ProfilArea> 
        {logged && (
            <>
            <img src={user.imagem} roundedCircle/>
            <h2>{`${user.nome} ${user.sobreNome}`}</h2>
            <span>{user.createdAt}</span>
            </>
        )}
        {showError && (
            <Alert variant="danger">
                <Alert.Heading>Faça Login</Alert.Heading>
            </Alert>
        )}

    </ProfilArea>
    <LogoUt/>
    </FormS>
   
)
}