import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';
import { useMutation, useQuery } from '@apollo/client';
import { IS_LIKE, COUNT_LIKES, ADD_LIKE, DELETE_LIKE } from '../../../gql/like';
import './Likes.scss';

export default function Likes({asana}) {
    const [loadingAction, setLoadingAction] = useState(false);
    const [addLike] = useMutation(ADD_LIKE);
    const [deleteLike] = useMutation(DELETE_LIKE);

    const {data, loading, refetch} = useQuery(IS_LIKE, {
        variables: {idAsana: asana.id}
    });

    const {data: dataCount, loading: loadingCount, refetch: refetchCount} = useQuery(COUNT_LIKES, {
        variables: {idAsana: asana.id}
    });

    const onAddLike = async () => {
        setLoadingAction(true)
        try {
            await addLike({
                variables: {idAsana: asana.id}
            });
            refetch();
            refetchCount();
        } catch (error) {
            console.log(error);
        }
        setLoadingAction(false)
    }

    const onDeleteLike = async () => {
        setLoadingAction(true)
        try {
            await deleteLike({
                variables: {idAsana: asana.id}
            });
            refetch();
            refetchCount();
        } catch (error) {
            console.log(error);
        }
        setLoadingAction(false);
    }

    const onAction = () => {
        if(!loadingAction) {
            if(isLike) {
                onDeleteLike();
            } else {
                onAddLike();
            }
        }
    }

    if(loading || loadingCount) return null;
    const {isLike} = data;
    const {countLikes} = dataCount;
  return (
    <div className='actions_likes'>
        <Button className={isLike ? 'like' : 'like active'} onClick={onAction}>{isLike ? 'Favorito!' : 'Add Favorito'}</Button>
        
        <p>{countLikes}{' '} {countLikes === 1 ? 'fav' : 'favs'}</p>
        
    </div>
  )
}
