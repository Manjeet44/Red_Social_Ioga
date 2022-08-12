import React, {useEffect} from 'react';
import FollowedMeditacion from '../../components/FollowedMeditacion/FollowedMeditacion';
import {useQuery} from '@apollo/client';
import { GET_ASANAS_FOLLOWEDS } from '../../gql/asana';
import './Meditaciones.scss';

//Incloure totes ses meditacions des qui seguesc

export default function Meditaciones() {
  const {data, loading, startPolling, stopPolling} = useQuery(GET_ASANAS_FOLLOWEDS);

  useEffect(() => {
    startPolling(1000);
    return () => {
        stopPolling()
    }
  }, [startPolling, stopPolling]);

  if(loading) return null;
  const {getAsanaFolloweds} = data;
  console.log(getAsanaFolloweds)

  return (
    <div className='contenedor'>
        <div className='contenedor_encabezado'>
          <h2>Meditaciones de Usuarios</h2>      
        </div>
        <div>
          {getAsanaFolloweds.length === 0 ? (<p className='color'>La gente que sigues no tiene Publicaciones...</p>) : (getAsanaFolloweds?.map((asana, index) => (
            <div  className='contenedor_meditaciones' key={index}>
              
              <FollowedMeditacion asana={asana} />

            </div>

          )))}
        </div>
    </div>
  )
}
