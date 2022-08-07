import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import { useQuery } from '@apollo/client';
import { GET_ASANA_USER } from '../../gql/asana';

export default function User() {
  const {username} = useParams();

  const {data, loading, startPolling, stopPolling} = useQuery(GET_ASANA_USER, {
    variables: {username}
  });

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    }
  }, [startPolling, stopPolling])
  

  if(loading) return null;
  const {getAsanas} = data;
  const totalPublications = getAsanas?.length;



  return (
    <>
        <Profile username={username} totalPublications={totalPublications} />
    </>
  )
}