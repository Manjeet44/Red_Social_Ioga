import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { NEW_ASANA, GET_ASANA_USER } from '../../gql/asana';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NewAsanaForm.scss';

export default function NewAsanaForm() {
    const {auth} = useAuth();
    const [newImage, setNewImage] = useState(null);

    const [newAsana] = useMutation(NEW_ASANA, {
        update(cache, {data: {newAsana}}) {
            const {getAsanas} = cache.readQuery({
                query: GET_ASANA_USER,
                variables: {username: auth.username}
            });
            cache.writeQuery({
                query: GET_ASANA_USER,
                variables: {username: auth.username},
                data: {
                    getAsanas: {...getAsanas, newAsana}
                }
            })
        }
    });
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            nombre: '',
            descripcion: '',
            beneficios: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El Nombre es Obligatorio'),
            descripcion: Yup.string().required('Agrega una descripcion'),
            beneficios: Yup.string().required('Agrega Beneficios')
        }),
        onSubmit: async formData => {
            try {
                const datosAsana = formData;
                await newAsana({
                    variables: {
                        input: datosAsana,
                        file: newImage
                    }
                });
                toast.success('Asana Agregada Correctamente');
                setTimeout(() => {
                    navigate(`/${auth.username}`)
                    setNewImage(null)
                }, 1500);
                
            } catch (error) {
                console.log(error)
            }
        }

    });
  return (
      <>
        <Form className='form-asana-new' onSubmit={formik.handleSubmit}>
        <h2>Nueva Meditacion</h2>
            <Form.Input 
                    type='text'
                    placeholder='Nombre'
                    name='nombre'
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    error={formik.errors.nombre}
            />
            <Form.Input 
                    type='text'
                    placeholder='Descripcion'
                    name='descripcion'
                    value={formik.values.descripcion}
                    onChange={formik.handleChange}
                    error={formik.errors.descripcion}
            />
            <Form.Input 
                    type='text'
                    placeholder='Beneficios'
                    name='beneficios'
                    value={formik.values.beneficios}
                    onChange={formik.handleChange}
                    error={formik.errors.beneficios}
            />
            <Form.Input 
                    type='file'
                    name='file'
                    value={formik.values.file}
                    onChange={(e) => {
                        setNewImage(e.target.files[0])
                    }}
                    error={formik.errors.file}
            /> 
            
            <Button type='submit' className='btn-submit'>Agregar Asana</Button>

        </Form>
    </>
  )
}
