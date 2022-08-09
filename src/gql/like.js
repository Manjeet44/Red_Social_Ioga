import { gql } from "@apollo/client"

export const ADD_LIKE = gql`
    mutation addLike($idAsana: ID!){
        addLike(idAsana: $idAsana)
    }
`;