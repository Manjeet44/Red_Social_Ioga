import React from 'react';
import { Image } from 'semantic-ui-react';
import './MeditacionbyId.scss';

export default function MeditacionbyId({asana}) {
    const {nombre, descripcion, file, beneficios} = asana;
    //Incorporar Like
  return (
    <div className='meditacion-by-id'>
        <div className='meditacion-by-id_imagen'>
            <Image src={file} alt='imagen_Meditacion' />
        </div>
        <div className='meditacion-by-id_informacion'>
            <h2>{nombre}</h2>
            <p className='meditacion-by-id_informacion-descripcion'>{descripcion}</p>
            <p className='meditacion-by-id_informacion-beneficios'>{beneficios}</p>
        </div>
    </div>
  )
}
