import React from 'react';
import Likes from './Likes/Likes';
import CommentForm from './CommentForm/CommentForm';
import Comments from './Comments/Comments';
import './Actions.scss';

export default function Actions({asana}) {
  return (
      <>
        <div className='actions'>
            <div className='actions_comments'>
                <h2>Dime tu Experiencia</h2>
                <Comments asana={asana} />
                <CommentForm asana={asana} />
            </div>
            <Likes asana={asana} />
        </div>
    </>
  )
}
