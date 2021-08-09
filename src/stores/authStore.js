import React, { createContext, useReducer } from 'react';

const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = tokenString;
    return userToken
};

const initialState = {
    token: getToken(),
};

export const AuthContext = createContext(initialState);

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
    const [ authState, dispatchAuthState ] = useReducer(( state, action ) => {
        const currentState = { ...state };
        switch(action.type) {
            case 'SET_TOKEN':
                sessionStorage.setItem('token', action.payload);
                currentState.token = action.payload;
                return currentState;
            case 'REMOVE_TOKEN':
                sessionStorage.removeItem('token');
                currentState.token = null;
                return currentState;
            default:   
                throw new Error('No valid action given to the reducer.');
        }
    }, initialState)

    return(
        <Provider value={{ authState, dispatchAuthState }}>{children}</Provider>
    );
};
