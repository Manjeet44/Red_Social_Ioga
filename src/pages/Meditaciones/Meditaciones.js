import React from 'react';
import Meditacion from '../../components/Meditacion/Meditacion';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET_ASANA_USER } from '../../gql/asana';
import './Meditaciones.scss';

//Incloure totes ses meditacions des qui seguesc

export default function Meditaciones() {
  const {auth} = useAuth();
  const {username} = auth;
  const {data, loading} = useQuery(GET_ASANA_USER, {
    variables: {username}
  });
  if(loading) return null;
  const {getAsanas} = data;

  return (
    <div className='contenedor'>
        <div className='contenedor_encabezado'>
          <h2>Meditaciones</h2>      
        </div>
        <div>
          {getAsanas?.map((asana, index) => (
            <div  className='contenedor_meditaciones' key={index}>
              <Meditacion asana={asana} username={username} />

            </div>

          ))}
        </div>
    </div>
  )
}
