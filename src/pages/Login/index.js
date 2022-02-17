import {Form, Button, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { FormS } from '../../components/FormS';
import axios from 'axios';



const FormInput = styled(FormControl)`
width: 30rem;
`;

export const Login = () => {

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleSubmit = (event) =>{
    event.preventDefault();

    const inputLogin = {
        email,
        senha,
    };
    console.log(inputLogin);
    axios.post('/auth', inputLogin)
    .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
    })
    .catch((error) => {
        console.log(error.message);
    });
};

    return(
        <>
        <FormS>
        <PageTitle>Login</PageTitle>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <FormInput 
            type="email" 
            placeholder="Digite seu email" 
            onChange={(event) => setEmail(event.target.value)}
            required
            />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha:</Form.Label>
                <FormInput 
                type="password" 
                placeholder="Digite sua senha" 
                onChange={(event) => setSenha(event.target.value)}
                required
                />
            </Form.Group>
            
            <Link to="/profile">
            <Button variant="success" type="submit">
                Login
            </Button>
            </Link>

            </Form>
            </FormS>
        </>
    )
}