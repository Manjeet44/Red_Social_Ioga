import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($input: LoginInput){
        login(input: $input) {
            token
    }
}
`;

export const REGISTER = gql`
    mutation register($input: userInput) {
        register(input: $input) {
            username
            email
            createAt
        }
    }
`;

export const GET_USER = gql`
    query getUser($id: ID, $username: String) {
        getUser(id: $id, username: $username){
            id
            username
        }
    }
`;
