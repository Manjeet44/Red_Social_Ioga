import React from 'react';
import Meditacion from '../../components/Meditacion/Meditacion';
import {Button} from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ASANA_USER } from '../../gql/asana';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Publicaciones.scss';


//TODO: Map con cada meditacion

export default function Publicaciones() {
    const {username} = useParams();
    const {auth} = useAuth();
    const {data, loading} = useQuery(GET_ASANA_USER, {
        variables: {username}
    });
    if(loading) return null;
    const {getAsanas} = data;

  return (
    <div className='contenedor'>
        <div className='contenedor_encabezado'>
          {username === auth.username ? (<h2>Mis Publicaciones</h2>) : (<h2>Publicaciones</h2>)}
          {username === auth.username &&
            <Link to={'/nueva-meditacion'}>
                <Button className='btn-new'>
                    Nueva Publicacion
                </Button>
            </Link>}
        </div>
        <div className='contenedor_asanas'>
          {getAsanas.length === 0 ? (<p className='color'>No tienes Publicaciones...</p>) : (getAsanas?.map((asana, index) => (
            <div  className='contenedor_meditaciones' key={index}>
              <Meditacion asana={asana} username={username} />

            </div>

          )))}
        </div>
    </div>
  )
}