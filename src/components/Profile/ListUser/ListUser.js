import React from 'react';
import { Image } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
import ImageNoFound from '../../../assets/energy-masters.jpg';
import './ListUser.scss';

export default function ListUser({users, setShowModal}) {
    const navigate = useNavigate();

    const goToUser = (username) => {
        setShowModal(false);
        navigate(`/${username}`);
    }

  return (
    <div className='list-users'>
        {users.length === 0 ? (<p className='list-users__not-users'>No hay Seguidores</p>) : (
            users.map((user, index) => (
                <div key={index} className='list-users__user' onClick={() => goToUser(user.username)}>
                    <Image src={user.avatar || ImageNoFound} avatar />
                    <div>
                        <p>{user.nombre}</p>
                        <p>{user.username}</p>
                    </div>
                </div>
            ))
        ) }
    </div>
  )
}