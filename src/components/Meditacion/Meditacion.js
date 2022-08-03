import React from 'react';
import Logo from '../../assets/energy-masters.png';
import { Link } from 'react-router-dom';
import './Meditacion.scss';

//TODO: Acomodar box grid quan feim petita sa finestra
//TODO: Nom usuari de qui puja sa Meditacio

export default function Meditacion({asana, username}) {
  const {beneficios, descripcion, nombre} = asana;

  return (
    <div className='contenedor_box'>
        <div className='contenedor_box-imagen'>
            <Link to='/'>
            <img src={Logo} className='contenedor_box__imagen-asana' alt='logo'/>
            </Link>
            <div className='contenedor_box-likes'> Subido por: {username} &#9829;160 Likes</div>
        </div>
        <div className='contenedor_box-informacion'>
            <div className='contenedor_box-nombre'>{nombre}</div>
            <div className='contenedor_box-descripcion'>{descripcion} </div>
            <div className='contenedor_box-beneficios'>{beneficios}</div>
        </div>  
    </div>
  )
}
