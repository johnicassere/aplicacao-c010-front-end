import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import { PageTitle } from '../../components/PageTitle';
import { FormS } from '../../components/FormS';


const FormInput = styled(FormControl)`
width: 30rem;
`;

export const Register = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [on, setOn] = useState(false);
    

const handleSubmit = (event) => {
event.preventDefault();

const inputUser = {
    email: email,
    nome: nome,
    sobreNome: sobreNome,
    imagem: imagem,
    senha: senha,
    confirmacaoSenha: confirmacaoSenha,
};



axios.post('/user', inputUser)
.then((response) => {
    console.log(response.data);
})
.catch((error) =>{
    console.log(error.message)
});
};

  return(
        <>
        <FormS>
        <PageTitle>Cadastro</PageTitle>
        
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label>Nome:</Form.Label>
            <FormInput 
            type="text" 
            placeholder="Digite seu nome" 
            onChange={(event) => setNome(event.target.value)}
            />

            <Form.Label>Sobre Nome:</Form.Label>
            <FormInput 
            type="text" 
            placeholder="Digite seu sobre nome" 
            onChange={(event) => setSobreNome(event.target.value)}
            />

            <Form.Label>Link da Imagem do Perfil:</Form.Label>
            <FormInput 
            type="text" 
            placeholder="Link da imagem" 
            onChange={(event) => setImagem(event.target.value)}
            />

            <Form.Label>Email:</Form.Label>
            <FormInput 
            type="email" 
            placeholder="Digite seu email" 
            onChange={(event) => setEmail(event.target.value)}
            />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Senha:</Form.Label>
                <FormInput 
                type="password" 
                placeholder="Digite sua senha" 
                onChange={(event) => setSenha(event.target.value)}
                />
                <Form.Label>Confirmação da Senha:</Form.Label>
                <FormInput 
                type="password" 
                placeholder="Confirme sua senha" 
                onChange={(event) => setConfirmacaoSenha(event.target.value)}
                />
            </Form.Group>
            <Link to="/">
            <Button variant="success" type="submit" onClick={() => setOn(true)}>
                Criar
            </Button>
            </Link> 
            </Form>
            </FormS>
        </>
    )
}