import React, {useCallback, useState} from 'react';
import { Button } from 'semantic-ui-react';
//import {useDropzone} from 'react-dropzone';
import { useMutation } from '@apollo/client';
//import { toast } from 'react-toastify';
import { UPLOAD_IMAGE } from '../../gql/asana';
import './ImageUploadForm.scss';

export default function ImageUploadForm() {
    const [uploadImage, {data}] = useMutation(UPLOAD_IMAGE);
    const [newImage, setNewImage] = useState(null);
    console.log(data)
    console.log(newImage)

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
        <Button onClick={(e) => {
          e.preventDefault();
          uploadImage({
            variables: {
              file: newImage
            }
          })
          }} >Subir</Button>
    </div>
  )
}
