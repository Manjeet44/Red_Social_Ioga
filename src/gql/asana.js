import { gql } from "@apollo/client";

export const NEW_ASANA = gql`
    mutation newAsana($input: AsanaInput, $file: Upload){
        newAsana(input: $input, file: $file) {
            nombre
            beneficios
            descripcion
        }
  
    }
`;

export const GET_ASANA_USER = gql`
    query getAsanas($username: String){
        getAsanas(username: $username){
            id
            nombre
            beneficios
            descripcion
            file
        }
    }
`;

export const UPLOAD_IMAGE = gql`
    mutation uploadImage($file: Upload) {
        uploadImage(file: $file){
            status
            urlImagen
        }
    }
`;

export const GET_ASANA_ID = gql`
    query getAsana($id: ID!) {
        getAsana(id: $id){
            id
            idUser 
            nombre
            descripcion
            beneficios
            file
        }
    }
`;

export const GET_ASANAS_FOLLOWEDS = gql`
    query getAsanaFolloweds {
        getAsanaFolloweds{
            id
            idUser {
                nombre
                username
                avatar
            }
        file
        nombre
        descripcion
        beneficios
        typeFile
        createAt
        }
    }
`;

export const GET_ASANA_BY_LIKE = gql `
    query getAsanaByLike{
    getAsanaByLike{
        id
        nombre
        beneficios
        descripcion
        file
        createAt
        
    }
}

`;