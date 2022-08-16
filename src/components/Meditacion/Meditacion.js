import React from 'react';
import useAuth from '../../hooks/useAuth';
import {Button} from 'semantic-ui-react';
import Logo from '../../assets/energy-masters.jpg';
import { useQuery, useMutation } from '@apollo/client';
import { COUNT_LIKES } from '../../gql/like';
import { DELETE_ASANA } from '../../gql/asana';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Meditacion.scss';

//TODO: Acomodar box grid quan feim petita sa finestra
//TODO: Nom usuari de qui puja sa Meditacio

export default function Meditacion({asana, username}) {
  const {beneficios, descripcion, nombre, file, id} = asana;
  const {auth} = useAuth();
  const navigate = useNavigate();
  const {data: dataCount, loading: loadingCount} = useQuery(COUNT_LIKES, {
    variables: {idAsana: id}
  });
  const [deleteAsana] = useMutation(DELETE_ASANA)


  const onDelete = () => {
    Swal.fire({
      title: 'Estas seguro que quieres eliminar esta Meditacion?',
      text: "No se puede recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteAsana({
            variables: {idAsana: id}
          });
        } catch (error) {
          console.log(error)
        }
        Swal.fire(
          'Eliminado!',
          'Tu Publicacion ha sido Eliminada!',
          'success'
        )
      }
    })
  }

  const onEdit = () => {
    navigate(`/editar-meditacion/${id}`);
  }
  
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
          {auth.username === username && (
          <>
            <Button className='btn-edit' onClick={onEdit}>Edit</Button>
            <Button className='btn-delete' onClick={onDelete}>Delete</Button>
          </>) }
          
          <Link to={`/meditacion/${id}`}>
              <p className='contenedor_box-nombre'>{nombre}</p>
          </Link>
            <p className='contenedor_box-descripcion'>{descripcion}</p>
            <p className='contenedor_box-beneficios'>{beneficios}</p>
        </div>  
    </div>
  )
}
