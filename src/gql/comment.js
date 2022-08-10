import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
    mutation addComment($input: CommentInput) {
        addComment(input: $input){
            idAsana
            comment
        }
    }
`;

export const GET_COMMENTS = gql`
    query getComments($idAsana: ID!){
        getComments(idAsana: $idAsana){
            comment
            idUser {
                username
                avatar

            }
        }
    }
`;