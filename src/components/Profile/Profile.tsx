import React from 'react'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux';
import {PostForm} from './PostForm/PostForm';

export type ProfilePropsType = {
    changeNewPostText: (message:string) => void
    addPost:()=>void
}

export const Profile:React.FC<ProfilePageType & ProfilePropsType>= ({changeNewPostText,addPost, ...props}) =>{
    return (
        <div>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <PostForm newPostText={props.newPostText} changeNewPostText={changeNewPostText} addPost={addPost}/>
            <Posts posts={props.posts}/>
        </div>
    )
}