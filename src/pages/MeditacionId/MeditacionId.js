import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ASANA_ID } from '../../gql/asana';
import { useParams } from 'react-router-dom';
import MeditacionbyId from '../../components/MeditacionbyId/MeditacionbyId';
import Actions from '../../components/Actions/Actions';
import './MeditacionId.scss';

export default function MeditacionId() {
    const {id} = useParams();
    const {data, loading} = useQuery(GET_ASANA_ID, {
        variables: {id}
    });
    if(loading) return null;
    const {getAsana} = data;
    //Incorporar Like i comentari
  return (
    <>
      <MeditacionbyId asana={getAsana}/>
      <Actions asana={getAsana} id={id} />
    </>
  )
}
