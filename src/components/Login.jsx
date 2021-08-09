import React, { useState, useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client'
import { TOKEN_AUTH } from '../graphql/mutations/authMutations';
import { AuthContext } from '../stores/authStore';

const Login = () => {
    const { authState, dispatchAuthState } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [tokenAuth, { data, loading, error }] = useMutation(TOKEN_AUTH);

    loading && <h1>Loading Data...</h1>;
    error && console.error(error);
    data?.tokenAuth && dispatchAuthState({ type: 'SET_TOKEN', payload: data.tokenAuth.token });
    
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
                        tokenAuth({ variables: { username, password } })
                    }} block variant="dark" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login;