import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { REGISTER } from '../../gql/user';
import { useMutation } from '@apollo/client';
import {toast} from 'react-toastify';

export default function RegisterForm({setShowLogin}) {
    const [register] = useMutation(REGISTER);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            nombre: Yup.string().required('El Nombre es Obligatorio'),
            apellido: Yup.string().required('El Apellido es Obligatorio'),
            username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacios").required('El Nombre de Usuario es Obligatorio'),
            email: Yup.string().email('El Email no es valido').required('El Email es Obligatorio'),
            password: Yup.string().required('El Password es obligatorio').oneOf([Yup.ref('repetirpassword')], 'El Password no coincide'),
            repetirpassword: Yup.string().required('El Password es obligatorio').oneOf([Yup.ref('password')], 'El Password no coincide')
      
        }),
        onSubmit: async formData => {
        try {
            const newUser = formData;
            delete newUser.repetirpassword;
            await register({
            variables: {
                input: newUser          
            }
            });
            toast.success('Usuario Registrado Correctamente');
            setTimeout(() => {
                setShowLogin(true);
            }, 2000)
        } catch (error) {
            toast.error(error.message)
        }
        }
    });

  return (
      <>
        <h2>Registrate para ver Kriyas, Meditaciones, Alimentos saludables y Mucho MAS!</h2>
        <Form onSubmit={formik.handleSubmit}>
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
                placeholder='Apellidos'
                name='apellido'
                value={formik.values.apellido}
                onChange={formik.handleChange}
                error={formik.errors.apellido}
            />

            <Form.Input 
                type='text'
                placeholder='Nombre de Usuario'
                name='username'
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.errors.username}
            />

            <Form.Input 
                type='text'
                placeholder='Correo Electronico'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
            />

            <Form.Input 
                type='password'
                placeholder='Escribe tu Password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />

            <Form.Input 
                type='password'
                placeholder='Repite tu Password'
                name='repetirpassword'
                value={formik.values.repetirpassword}
                onChange={formik.handleChange}
                error={formik.errors.repetirpassword}
            />

            <Button type='submit' className='btn-submit'>Registrarse</Button>
        </Form>
      </>
        
  )
}

function initialValues() {
    return {
      nombre: '',
      apellido: '',
      username: '',
      email: '',
      password: '',
      repetirpassword: ''
    }
  }
