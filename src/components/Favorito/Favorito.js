import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/energy-masters.jpg';
import './Favorito.scss';

export default function Favorito({asana}) {
    const {id, nombre, descripcion, beneficios, file} = asana;
  return (
    <div className='contenedor_box-fav'>
        <div className='contenedor_box-fav-imagen'>
            <Link to={`/meditacion/${id}`}>
              {/* <Image className='contenedor_box__imagen-asana' src={file} alt='logo'/> */}
            <img src={file ? file : Logo} className='contenedor_box-fav__imagen-asana' alt='logo'/> 
            </Link>
        </div>
        <div className='contenedor_box-fav-informacion'>
        <Link to={`/meditacion/${id}`}>
            <p className='contenedor_box-fav-nombre'>{nombre}</p>
        </Link>
            <p className='contenedor_box-fav-descripcion'>{descripcion}</p>
            <p className='contenedor_box-fav-beneficios'>{beneficios}</p>
        </div>  
    </div>
  )
}
