import React from 'react'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux';

const Profile:React.FC<ProfilePageType>= (props) =>{
    return (
        <div>
            <ProfileInfo {...props.profileInfo}/>
            <Posts posts={props.posts}/>
        </div>
    )
}

export  default Profile