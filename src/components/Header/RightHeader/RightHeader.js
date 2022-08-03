import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../assets/energy-masters.png';
//import ModalUpload from '../../Modal/ModalUpload/ModalUpload';
//import ImageNoFound from '../../../assets/png/avatar.png';
import './RightHeader.scss';

//TODO: Avatar perfil

export default function RightHeader() {
    const {auth} = useAuth();
    
  return (
    <>
        <div className='right-header'>
            <Link to='/'>
                <Icon name='home' color='purple' />
            </Link>
            <Link to='/'>
                <Icon name='plus' color='purple' /> 
            </Link>
            <Link to={`/${auth.username}`}>
                <Image src={Logo} avatar />
            </Link>
        </div>
        
    </>
  )
}
