import React, {useEffect} from 'react';
import ImageNoFound from '../../../assets/energy-masters.jpg'
import { Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../../../gql/comment';
import {Link} from 'react-router-dom';
import './Comments.scss';

export default function Comments({asana}) {
    const {data, loading, startPolling, stopPolling} = useQuery(GET_COMMENTS, {
        variables: {idAsana: asana.id}
    });

    useEffect(() => {
      startPolling(1000);
      return () => {
          stopPolling();
      }
    }, [startPolling, stopPolling]);
    

    if(loading) return null;
    const {getComments} = data;
  return (
    <div className='comments'>
        {getComments.map((comment, index) => (
            <Link key={index} to={`/${comment.idUser.username}`} className='comment'>
                <Image src={comment.idUser.avatar || ImageNoFound} avatar />
                <div>
                    <p id='usuario'>{comment.idUser.username}</p>
                    <p>{comment.comment}</p>
                </div>
            </Link>
        ))}
    </div>
  )
}