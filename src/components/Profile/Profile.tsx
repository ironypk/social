import React from 'react'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux';
import {PostForm} from './PostForm/PostForm';

export const Profile:React.FC<ProfilePageType>= (props) =>{
    return (
        <div>
            <ProfileInfo {...props.profileInfo}/>
            <PostForm/>
            <Posts posts={props.posts}/>
        </div>
    )
}