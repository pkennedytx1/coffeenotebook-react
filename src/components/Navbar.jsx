import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useToken from '../utils/useToken';
import { useHistory } from "react-router-dom"

const Navagation = () => {
    let history = useHistory();
    const { removeToken } = useToken();

    const handleLogout = () => {
        removeToken();
        history.push('/login');
    }

    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>Coffee Notebook</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/dashboard'>Coffee Dashboard</Nav.Link>
                    <Nav.Link as={Link} to='/preferences'>User Preferences</Nav.Link>
                    <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navagation;