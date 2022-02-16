import { Form, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { PageTitle } from '../../components/PageTitle';
import { FormS } from '../../components/FormS';



const FormInput = styled(FormControl)`
width: 30rem;
`;

export const Mesa = () => {
    return(
        <>
        
        <FormS>
            <PageTitle>Mesa</PageTitle>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Numero da Mesa:</Form.Label>
            <FormInput type="number" placeholder="Numero da Mesa" />

            <Form.Label>Descrição:</Form.Label>
            <FormInput type="text" placeholder="Descrição" />

            <Form.Label>Imagem:</Form.Label>
            <FormInput type="text" placeholder="Link da Imagem" />

            <Form.Label>Menu:</Form.Label>
            <FormInput type="text" placeholder="Menu" />
            </Form.Group>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Descrição</label>
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Livre/Ocupado" />
            </Form.Group> 

            <Button variant="success" type="submit">
                Criar
            </Button>
            </Form>
            </FormS>

        </>
    )
}


