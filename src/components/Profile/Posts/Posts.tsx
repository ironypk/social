import React from 'react'
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux';
import PostForm from './PostForm';


const Posts:React.FC<ProfilePageType> = (props) => {
    return (
        <div>
            <PostForm/>
            {props.posts.map( post => <Post key={post.id} message={post.message} likes={post.likes}/>)}
        </div>
    )
}


export  default Posts