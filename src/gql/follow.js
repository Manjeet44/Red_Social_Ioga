import { gql } from "@apollo/client";

export const FOLLOW_USER = gql`
    mutation followUser($username: String!) {
        followUser(username: $username)
    }
`;

export const UNFOLLOW = gql`
    mutation unFollow($username: String!) {
        unFollow(username: $username)
    }
`;

export const IS_FOLLOW = gql`
    query isFollow($username: String!){
        isFollow(username: $username)
    }
`;

export const GET_FOLLOWERS = gql`
    query getFollowers($username: String!) {
        getFollowers(username: $username){
            username
            nombre
            avatar
        }
    }
`;

export const GET_FOLLOWEDS = gql`
    query getFolloweds($username: String!) {
        getFolloweds(username: $username){
            username
            nombre
            avatar
        }
    }
`;

export const GET_NOT_FOLLOWEDS = gql`
    query getNotFolloweds{
        getNotFolloweds{
            username
            nombre
            avatar
        }
    }

`;