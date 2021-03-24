import React from 'react'
import Post from './Post/Post';
import {PostType, ProfilePageType} from '../../../redux';
import PostForm from './PostForm/PostForm';

export type ProfilePropsType = {
    posts : Array<PostType>
}

const Posts:React.FC<ProfilePropsType> = ({posts}) => {
    return (
        <div>
            <PostForm/>
            {posts.map( post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes}/>)}
        </div>
    )
}


export  default Posts