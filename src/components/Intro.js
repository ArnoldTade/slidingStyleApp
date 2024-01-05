import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Intro() {
  return (
    <Container id='img-container'>
      <Row>
        <Col id='img-col'>
             <Image className='img-about' id="img" src={process.env.PUBLIC_URL + '/img/dog.jpg'} alt="Example" rounded />
        </Col>
        <Col id='img-col'>
            <Image className='img-project' id="img" src={process.env.PUBLIC_URL + '/img/dog.jpg'} alt="Example" rounded />
        </Col>
        <Col id='img-col'>
            <Image className='img-contact' id="img" src={process.env.PUBLIC_URL + '/img/dog.jpg'} alt="Example" rounded />

        </Col>
      </Row>
    </Container>
  )
}

export default Intro
