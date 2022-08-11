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
            nombre
            apellido
            username
            description
            siteWeb
            avatar
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($input: UserUpdateInput) {
        updateUser(input: $input)
    }
`;

export const SEARCH_USER = gql`
    query search($search: String) {
        search(search: $search) {
            nombre
            username
            avatar
        }
    }
`;