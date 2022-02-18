import axios from "axios";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FormS } from "../../components/FormS";
import { PageTitle } from "../../components/PageTitle";
import { CardS } from "../../components/Card";


export const ListUsers = () => {

    const [users, setUsers] = useState([])
    const listMap = [];
    const getDta =  async () => {
      axios.get('/user').then((response) =>{
          console.log(response.data)
       setUsers(response.data)    
});
};

useEffect(() => {
 getDta()
},[])
    return(
        <>
        <FormS>
            <PageTitle>Todos Usuarios</PageTitle>

            {users.map((listMap) => (

            
                    <Table key={listMap.id} striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Sobre Nome</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                <td>{listMap.nome}</td>
                                <td>{listMap.sobreNome}</td>
                                <td colspan={2}>{listMap.email}</td>
                                </tr>
                            </tbody>
                        </Table>
                        
                ))}
            </FormS>
        </>
    )
}
