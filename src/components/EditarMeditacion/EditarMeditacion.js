import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useMutation} from '@apollo/client';
import { UPDATE_ASANA } from '../../gql/asana';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './EditarMeditacion.scss';

export default function EditarMeditacion() {
    const {auth} = useAuth();
    const navigate = useNavigate();
    const {id} = useParams();
    const [editarAsana] = useMutation(UPDATE_ASANA);

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
                await editarAsana({
                    variables: {
                        idAsana: id,
                        input: {
                            datosAsana,
                        }
                    }
                });
                toast.success('Asana Modificada Correctamente');
                setTimeout(() => {
                    navigate(`/${auth.username}`)
                }, 1500);
                
            } catch (error) {
                console.log(error)
            }
        }

    });
    
    
    
  return (
      <>
        <Form className='form-asana' onSubmit={formik.handleSubmit}>
        <h2>Editar Meditacion</h2>
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
            
            <Button type='submit' className='btn-submit'>Editar Asana</Button>

        </Form>
    </>
  )
}

