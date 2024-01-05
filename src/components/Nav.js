import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
   
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">SaldiVar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Arnold Saldivar</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Nav
