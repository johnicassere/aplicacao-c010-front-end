import axios from 'axios';
import { Container, Col } from 'react-bootstrap';
import { Carrossel } from '../../components/Carrossel';
import { BluetecoImg } from '../../Api/Card';
import { imgInfo } from '../../Api/Carrossel-slider';
import { useState, useEffect } from 'react';
import { CardContainer } from '../../components/CardContainer/inesx';
import { CardS } from '../../components/Card';


export const Main = () => {

  const { imagem } = BluetecoImg;

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
          <CardContainer>
            {/* {mesas.map((item) => ( */}

            {Array.from({ length: 2 }).map((_, idx) => (
              <Col lg={4} md={6} xs={12} key={Math.random()}>
              <a href='!#'>
                <CardS>
                <CardS.Img variant='top' src={BluetecoImg[3].imageUrl}/>
                <br/>
                    <CardS.Img variant='top' src={BluetecoImg[0].imageUrl}/>
                    
                    <CardS.Img variant='top' src={BluetecoImg[1].imageUrl}/>
                    <CardS.Img variant='top' src={BluetecoImg[2].imageUrl}/>
                    <CardS.Img variant='top' src={BluetecoImg[3].imageUrl}/>
                </CardS>
              </a>
              </Col>
            ))}
          </CardContainer>
        </Container>
        </>
    );
};