import { gql } from "@apollo/client"

export const ADD_LIKE = gql`
    mutation addLike($idAsana: ID!){
        addLike(idAsana: $idAsana)
    }
`;

export const DELETE_LIKE = gql`
    mutation deleteLike($idAsana: ID!){
        deleteLike(idAsana: $idAsana)
    }
`;

export const IS_LIKE = gql`
    query isLike($idAsana: ID!){
        isLike(idAsana: $idAsana)
    }
`;

export const COUNT_LIKES = gql`
    query countLikes($idAsana: ID!) {
        countLikes(idAsana: $idAsana)
    }
`;