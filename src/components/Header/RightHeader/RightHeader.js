import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import Logo from '../../../assets/energy-masters.jpg';
import './RightHeader.scss';


export default function RightHeader() {
    const {auth} = useAuth();
    const {data, loading} = useQuery(GET_USER, {
        variables: {username: auth.username},
    });
    if(loading) return null;
    const {avatar} = data.getUser;
    
  return (
    <>
        <div className='right-header'>
            <Link to='/'>
                <Icon name='home' color='blue' />
            </Link>
            <Link to='/nueva-meditacion'>
                <Icon name='plus' color='blue' /> 
            </Link>
            <Link to={`/${auth.username}`}>
                <Image src={avatar ? avatar : Logo} avatar />
            </Link>
        </div>
        
    </>
  )
}
