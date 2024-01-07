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
             <h1 class="about">About</h1>
        </Col>
        <Col id='img-col'>
            <Image className='img-project' id="img" src={process.env.PUBLIC_URL + '/img/dog.jpg'} alt="Example" rounded />
            <h1 class="project">Project</h1>
        </Col>
        <Col id='img-col'>
            <Image className='img-contact' id="img" src={process.env.PUBLIC_URL + '/img/dog.jpg'} alt="Example" rounded />
            <h1 class="contact">Contact</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Intro
