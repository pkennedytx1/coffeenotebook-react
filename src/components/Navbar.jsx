import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navagation = () => {
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>Coffee Notebook</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/dashboard'>Coffee Dashboard</Nav.Link>
                    <Nav.Link as={Link} to='/preferences'>User Preferences</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navagation;