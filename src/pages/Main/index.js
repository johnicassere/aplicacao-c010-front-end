import axios from 'axios';
import { Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carrossel } from '../../components/Carrossel';
import { BluetecoImg } from '../../Api/Card';
import { imgInfo } from '../../Api/Carrossel-slider';
import { useState, useEffect } from 'react';
import { CardContainer } from '../../components/CardContainer';
import { CardS } from '../../components/Card';


export const Main = () => {

  const [mesas, setMesas] = useState([]);
  
  const getData = async () => {
    await axios.get('/mesa').then((response) =>{
      setMesas(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

    return(
        <>
        <Carrossel data={imgInfo}/>
        <Container>
          <CardContainer data={BluetecoImg}>
          
          {BluetecoImg.map((mesas) => (
            <Link to="/review" key={Math.floor(Math.random() +1)}>
              <CardS>
                <CardS.Img variant="top" src={mesas.imageUrl} />
              </CardS>
            </Link>
          ))}
            
          </CardContainer>
        </Container>
        </>
    );
};