import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_ASANA, GET_ASANA_ID } from '../../gql/asana';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Formik } from 'formik';
import './EditarMeditacionID.scss';

export default function EditarMeditacionID() {
    const {auth} = useAuth();
    const navigate = useNavigate();
    const {id} = useParams();
    const [editarAsana] = useMutation(UPDATE_ASANA);
    const {data, loading} = useQuery(GET_ASANA_ID, {
        variables: {id}
    });
    if(loading) return null;
    const {getAsana} = data;
    //Logica posar es value amb ses variables ja

    const handleSubmit = async valores => {
        const {nombre, descripcion, beneficios} = valores;
        try {
            await editarAsana({
                variables: {
                    idAsana: id,
                    input: {
                        nombre,
                        descripcion,
                        beneficios
                    }
                }
            });
            toast.success('Asana Modificada Correctamente');
            setTimeout(() => {
                navigate(`/${auth.username}`)
            }, 1500);
            
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
      <div className='form_editar'>
            <Formik
                enableReinitialize
                initialValues={getAsana}
                onSubmit={(valores) => {
                    handleSubmit(valores)}}
            >
            {props => {

            return (

                  
            <Form onSubmit={props.handleSubmit} className='form-asana' >
                <h2>Editar Meditacion</h2>
                <Form.Input
                    type='text'
                    placeholder='Nombre'
                    name='nombre'
                    onChange={props.handleChange}
                    value={props.values.nombre}
                    onBlur={props.handleBlur}
                />
                <Form.Input
                    type='text'
                    placeholder='Descripcion'
                    name='descripcion'
                    onChange={props.handleChange}
                    value={props.values.descripcion}
                    onBlur={props.handleBlur}
                />
                <Form.Input
                    type='text'
                    placeholder='Beneficios'
                    name='beneficios'
                    onChange={props.handleChange}
                    value={props.values.beneficios}
                    onBlur={props.handleBlur}
                />
                <Button type='submit' className='btn-submit'>Editar Meditacion</Button>
            </Form>
            )
        }}
        </Formik>
    </div>
  )
}
