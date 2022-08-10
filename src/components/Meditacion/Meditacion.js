import React from 'react';
import Logo from '../../assets/energy-masters.png';
import { useQuery } from '@apollo/client';
import { COUNT_LIKES } from '../../gql/like';
import { Link } from 'react-router-dom';
import './Meditacion.scss';

//TODO: Acomodar box grid quan feim petita sa finestra
//TODO: Nom usuari de qui puja sa Meditacio

export default function Meditacion({asana, username}) {
  const {beneficios, descripcion, nombre, file, id} = asana;
  const {data: dataCount, loading: loadingCount} = useQuery(COUNT_LIKES, {
    variables: {idAsana: id}
  });

  if(loadingCount) return null;
  const {countLikes} = dataCount;

  return (
    <div className='contenedor_box'>
        <div className='contenedor_box-imagen'>
            <Link to={`/meditacion/${id}`}>
              {/* <Image className='contenedor_box__imagen-asana' src={file} alt='logo'/> */}
            <img src={file ? file : Logo} className='contenedor_box__imagen-asana' alt='logo'/> 
            </Link>
            <div className='contenedor_box-likes'> Subido por: {username} &#9829; {countLikes} Likes</div>
        </div>
        <div className='contenedor_box-informacion'>
        <Link to={`/meditacion/${id}`}>
            <p className='contenedor_box-nombre'>{nombre}</p>
        </Link>
            <p className='contenedor_box-descripcion'>{descripcion}</p>
            <p className='contenedor_box-beneficios'>{beneficios}</p>
        </div>  
    </div>
  )
}
