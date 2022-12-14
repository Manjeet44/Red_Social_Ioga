import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_NOT_FOLLOWEDS} from '../../../gql/follow';
import ImageNoFound from '../../../assets/energy-masters.jpg';
import './UserNotFollowed.scss';

export default function UserNotFolloweds() {
    const {data, loading} = useQuery(GET_NOT_FOLLOWEDS);
    if(loading) return null;
    const {getNotFolloweds} = data;

  return (
    <div className='users-not-followeds'>
        <h3>Gente que no sigues...Sigueme!</h3>
        {getNotFolloweds?.map((user, index) => (
            <Link key={index} to={`/${user.username}`} className='users-not-followeds__user'>
                <Image src={user.avatar || ImageNoFound} avatar />
                <span>{user.nombre}</span>
            </Link>
        ))}
    </div>
  )
}