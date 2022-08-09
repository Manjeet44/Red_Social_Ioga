import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ASANA_ID } from '../../gql/asana';
import { useParams } from 'react-router-dom';
import MeditacionbyId from '../../components/MeditacionbyId/MeditacionbyId';
import './MeditacionId.scss';

export default function MeditacionId() {
    const {id} = useParams();
    const {data, loading, refetch} = useQuery(GET_ASANA_ID, {
        variables: {id}
    });
    if(loading) return null;
    const {getAsana} = data;
  return (
    <MeditacionbyId asana={getAsana}/>
  )
}
