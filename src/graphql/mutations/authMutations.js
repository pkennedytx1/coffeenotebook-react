import { gql } from '@apollo/client';

export const TOKEN_AUTH = gql`
    mutation TokenAuth($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            token
        }
    }
`;
