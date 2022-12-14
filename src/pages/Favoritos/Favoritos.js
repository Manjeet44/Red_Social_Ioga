import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import { GET_ASANA_BY_LIKE } from '../../gql/asana';
import Favorito from '../../components/Favorito/Favorito';
import './Favoritos.scss';

//Incloure totes ses meditacions des qui seguesc

export default function Favoritos() {
  const {data, loading, startPolling, stopPolling} = useQuery(GET_ASANA_BY_LIKE);

  useEffect(() => {
    startPolling(1000);
    return () => {
        stopPolling()
    }
  }, [startPolling, stopPolling]);

  if(loading) return null;
  const {getAsanaByLike} = data;


  return (
    <div className='contenedor'>
        <div className='contenedor_encabezado'>
          <h2>Mis Favoritos</h2>      
        </div>
        <div>
          {getAsanaByLike.length === 0 ? <p className='color-fav'>Empieza agregar a favoritos...</p> : ( getAsanaByLike?.map((asana, index) => (
            <div  className='contenedor_fav' key={index}>
              
              <Favorito asana={asana} />

            </div>

          )))}
        </div>
    </div>
  )
}