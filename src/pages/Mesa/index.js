import { Form, Button, FormControl } from 'react-bootstrap';
import { PageTitle } from '../../components/PageTitle';
import { FormS } from '../../components/FormS';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';



const FormInput = styled(FormControl)`
width: 30rem;
`;

export const Mesa = () => {

    const [numeroMesa, setNumeroMesa] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [menu, setMenu] = useState('');
    const [livre, setLivre] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const inputMesa = {
            numeroMesa,
            descricao,
            imagem,
            menu,
            livre,
        }
        console.log(inputMesa)

        

        axios.post('/mesa', inputMesa)
        .then((response) => {
           // const token = response.data.token;
            //localStorage.setItem('token', token);
            console.log(response)

        })
        .catch((error) => {
            console.log(error.message)
        });
    };
    

    return(
        <>
        
        <FormS>
            <PageTitle>Mesa</PageTitle>
            <Form 
            onSubmit={handleSubmit}
            onChange={() => setLivre(true)}
            >
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Numero da Mesa:</Form.Label>
            <FormInput 
            type="number" 
            placeholder="Numero da Mesa" 
            onChange={(event) => setNumeroMesa(event.target.value)}
            />

            <Form.Label>Descrição:</Form.Label>
            <FormInput 
            type="text" 
            placeholder="Descrição" 
            onChange={(event) => setDescricao(event.target.value)}
            />

            <Form.Label>Imagem:</Form.Label>
            <FormInput 
            type="text" 
            placeholder="Link da Imagem" 
            onChange={(event) => setImagem(event.target.value)}
            />

            <Form.Label>Menu:</Form.Label>
            <FormInput 
            type="text" 
            placeholder="Menu" 
            onChange={(event) => setMenu(event.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                label="Ocupado"
                />
            </Form.Group> 

            <Link to="/">
            <Button variant="success" type="submit">
            Criar
            </Button>
            </Link>

            </Form>
            </FormS>

        </>
    )
}


