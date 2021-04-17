import React from 'react'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Form} from '../Form/Form';
import {ProfilePropsType} from './ProfileContainer';


export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <Form title={props.title}
                  newText={props.newText}
                  changeFormText={props.changeNewPostText}
                  sendForm={props.addPost}/>
            <Posts posts={props.posts}/>
        </div>
    )
}