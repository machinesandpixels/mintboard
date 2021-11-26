import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="gradient--bg" variant="dark">
          <Container>
                <Navbar.Brand as={Link} to='/'>
                    <Image fluid className="" src="/images/leaf.png" rounded />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
              <Nav.Link className="text-white" as={NavLink} to='/about'>
                About
              </Nav.Link>
              <Nav.Link className="text-white" as={NavLink} to='/whiteboard'>
                  Try Mintboard
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Header;
