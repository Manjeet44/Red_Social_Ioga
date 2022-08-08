import React, {useState} from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import ImageUploadForm from '../ImageUploadForm/ImageUploadForm';
import { Image } from 'semantic-ui-react';
import ImageNoFound from '../../assets/energy-masters.png';
import ModalBasic from '../Modal/ModalBasic';
import SettingsForm from '../SettingsForm/SettingsForm';
import HeaderUser from './HeaderUser/HeaderUser';
import Followers from './Followers/Followers';
import './Profile.scss';

//Logica dins compoents<user<profile<profile

export default function Profile({username, totalPublications}) {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [childrenModal, setChildrenModal] = useState(null);
    const {auth} = useAuth();
    const {data, loading, refetch} = useQuery(GET_USER, {
        variables: {username},
    });

    if(loading) return null;
    const {getUser} = data;

    const handleModal = (type) => {
      switch (type) {
        case 'avatar':
          setTitleModal('Cambiar Foto de Perfil');
          setChildrenModal(<ImageUploadForm setShowModal={setShowModal} auth={auth} />);
          setShowModal(true);
          break;
        case 'settings':
           setTitleModal('');
           setChildrenModal(
           <SettingsForm 
             setShowModal={setShowModal} 
             setTitleModal={setTitleModal} 
             setChildrenModal={setChildrenModal}
             getUser={getUser}
             refetch={refetch}
           />);
           setShowModal(true);
           break;
      
        default:
          break;
      }
    }
  return (
    <>
          <div className='profile'>
            <div className='profile_imagen'>
              <Image
                src={getUser.avatar ? getUser.avatar : ImageNoFound} 
                avatar
                onClick={() => username === auth.username && handleModal('avatar')}
              />    
            </div>
            <div className='seguidores-seguidos'>
              <HeaderUser username={username} getUser={getUser} auth={auth} handleModal={handleModal} />
              <Followers username={username} totalPublications={totalPublications} />
              <div className='other'>
                {getUser.siteWeb && (
                  <a href={getUser.siteWeb} className='siteWeb' target='_blank'>{getUser.siteWeb}</a>
                )}
                {getUser.description && (
                  <p className='description'>{getUser.description}</p>
                )}
              </div>
            </div>         
          </div>
      
      <ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
        {childrenModal}
      </ModalBasic>
    </>
  )
}