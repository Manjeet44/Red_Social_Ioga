import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import ImageUploadForm from '../../components/ImageUploadForm/ImageUploadForm';
import { Image } from 'semantic-ui-react';

//Logica dins compoents<user<profile<profile

export default function User() {
    const {auth} = useAuth();
    const {data, loading} = useQuery(GET_USER, {
        variables: {username: auth.username},
    });
    if(loading) return null;
    const {getUser} = data;
  return (
    <div>
        <div>
            <Image src={getUser?.avatar} avatar />
            <p>{getUser.nombre}</p>
            <p>{getUser.apellido}</p>
            <p>{getUser.username}</p>
        </div>
        <ImageUploadForm/>
    </div>
  )
}
