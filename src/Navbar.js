
import { Nav, Navbar, NavDropdown, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import "./Navbar.css"

const MyNavbar = () => {
  return (
<Navbar className="container">
  <Container fluid>
    <Row xs="auto">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#Resume">Resume</Nav.Link>
        <NavDropdown title="Contact Me" id="basic-nav-dropdown">
          <NavDropdown.Item href="mailto:spologas@gmail.com/3.1">Email</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        </Row>
    </Container>
</Navbar>
  );
};

export default MyNavbar;