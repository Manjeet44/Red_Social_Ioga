import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { LOGIN } from '../../gql/user';
import { useMutation } from '@apollo/client';
import useAuth from '../../hooks/useAuth';
import { decodeToken } from '../../utils/token';
import './LoginForm.scss';


export default function LoginForm() {
    const [error, setError] = useState("");
    const [login] = useMutation(LOGIN);
    const {setUser} = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El Email no es valido').required('El Email es Obligatorio'),
            password: Yup.string().required('El Password es Obligatorio')

        }),
        onSubmit: async formData => {
            setError('');
            try {
                const {data} = await login({
                    variables: {
                        input: formData 
                    }
                })
                const {token} = data.login;
                localStorage.setItem('token', token);
                setUser(decodeToken(token));
            } catch (error) {
                setError(error.message);
            }
        }
    })

  return (
    <Form className='login-form' onSubmit={formik.handleSubmit}>
        <h2>Iniciar Sesion</h2>
        <Form.Input 
            type='text'
            placeholder='Email registrado'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email && true}

        />
        <Form.Input 
            type='password'
            placeholder='Tu password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password && true}

        />
        <Button type='submit' className='btn-submit'>
            Inicia Sesion
        </Button>
        {error && <p className='submit-error'>{error}</p>}
    </Form>
  )
}
