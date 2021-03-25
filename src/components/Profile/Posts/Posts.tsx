import React from 'react'
import {Post} from './Post/Post';
import {PostType} from '../../../redux';

export type ProfilePropsType = {
    posts : Array<PostType>
}

export const Posts:React.FC<ProfilePropsType> = ({posts}) => {
    return (
        <div>
            {posts.map( post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes}/>)}
        </div>
    )
}