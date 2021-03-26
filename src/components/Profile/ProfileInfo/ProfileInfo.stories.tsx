import React from 'react';
import {ProfileInfo as ProfileInfoComponent, ProfileInfoPropsType} from './ProfileInfo';
import {ProfileInfoType} from '../../../redux';
import {Story} from '@storybook/react';

export default {
    title : 'Profile/ProfileInfo',
    component : ProfileInfoComponent
}

const Template:Story<ProfileInfoPropsType> = (args) => <ProfileInfoComponent {...args}/>
export const ProfileInfo = Template.bind({})
ProfileInfo.args = {
    profileInfo : {
        city:'Minsk',
        fullName:'Bulba Konstantin',
        about:"React programmer",
        avatar:'К'
    }
}