import React from 'react';
import { Link, NavLink } from 'react-router-dom'
// import { Navbar, Nav } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Container>
                <Navbar.Brand as={Link} to='/'>
                    Mintboard
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
              <Nav.Link as={NavLink} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to='/whiteboard'>
                  Try Mintboard
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Header;
