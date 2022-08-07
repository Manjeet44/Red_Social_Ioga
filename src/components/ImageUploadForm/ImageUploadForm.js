import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import { toast } from 'react-toastify';
import { UPLOAD_IMAGE } from '../../gql/asana';
import './ImageUploadForm.scss';

export default function ImageUploadForm({setShowModal, auth}) {
    const [uploadImage] = useMutation(UPLOAD_IMAGE, {
      update(cache, {data: {uploadImage}}) {
        const {getUser} = cache.readQuery({
          query: GET_USER,
          variables: {username: auth.username}
        });
        cache.writeQuery({
          query: GET_USER,
          variables: {username: auth.username},
          data: {
            getUser: {...getUser, avatar: uploadImage.urlImagen}
          }
        })
      }
    });
    const [newImage, setNewImage] = useState(null);
    const subirAvatar = async (e) => {
      e.preventDefault();
      try {
        const {data} = await uploadImage({
          variables: {
            file: newImage
          }
        });
        if(!data.uploadImage.status) {
          toast.warning('Error al actualizar el avatar');
        } else {
          setShowModal(false);
        }
      } catch (error) {
        console.log(error);
        setShowModal(false);
      }
      
    }

  return (
    <div>
        <input
          type='file'
          name='imagen'
          id='imagen'
          onChange={(e) => {
            setNewImage(e.target.files[0])
          } }
        />
        <Button onClick={subirAvatar} >Subir</Button>
    </div>
  )
}
