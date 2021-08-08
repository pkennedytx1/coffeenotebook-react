import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useMutation, gql } from '@apollo/client'

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [tokenAuth, { data, loading, error }] = useMutation(
        gql`
            mutation TokenAuth($username: String!, $password: String!) {
                tokenAuth(username: $username, password: $password) {
                    token
                }
            }
        `
    );

    useEffect(() => {
        data?.tokenAuth && setToken(data.tokenAuth.token)
    }, [data])

    return(
        <div className='d-flex' style={{height: '80vh'}} >
            <Form className='align-self-center' style={{width: '300px', margin: '0 auto'}} >
                <Form.Group className="mb-3">
                    <h2>Welcome Back</h2>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                <   Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button onClick={(e) => {
                        e.preventDefault();
                        console.log(username, password);
                        tokenAuth({ variables: { username, password } });
                    }} block variant="dark" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;