import React from 'react';
import Profile from '../Profile';
import ProfileInfo from './ProfileInfo';
import {ProfileInfoType} from '../../../redux';
import {Story} from '@storybook/react';

export default {
    title : 'Profile/ProfileInfo',
    component : ProfileInfo
}

const Template:Story<ProfileInfoType> = (args) => <ProfileInfo {...args}/>
export const DefaultProfileInfo = Template.bind({})
DefaultProfileInfo.args = {
    city:'Minsk',
    fullName:'Bulba Konstantin',
    about:"React programmer",
    avatar:'К'
}