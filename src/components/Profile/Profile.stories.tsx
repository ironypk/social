import React from 'react';
import {Profile as ProfileComponent} from './Profile';
import {Story} from '@storybook/react';
import * as PostsStories from './Posts/Posts.stories'
import * as ProfileInfoStories from './ProfileInfo/ProfileInfo.stories'
import {ProfilePageType} from '../../redux';
export default {
    title:'Profile/Profile',
    component:ProfileComponent
}

const Template:Story<ProfilePageType> = (args) => <ProfileComponent {...args}/>
export const Profile = Template.bind({})
Profile.args = {
    profileInfo:{
        city:'Minsk',
        fullName:'Bulba Konstantin',
        about:"React programmer",
        avatar:'К'
    },
    ...PostsStories.Posts.args
}