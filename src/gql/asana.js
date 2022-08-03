import { gql } from "@apollo/client";

export const NEW_ASANA = gql`
    mutation newAsana($input: AsanaInput){
        newAsana(input: $input) {
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