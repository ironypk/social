import React from 'react';
import {Profile as ProfileComponent} from './Profile';
import {ProfilePropsType} from './ProfileContainer'
import {Story} from '@storybook/react';
import * as PostsStories from './Posts/Posts.stories'
import * as ProfileInfoStories from './ProfileInfo/ProfileInfo.stories'
import * as PostFormStories from '../Form/Form.stories'


export default {
    title:'Profile/Profile',
    component:ProfileComponent
}

const Template:Story<ProfilePropsType> = (args) => <ProfileComponent {...args}/>
export const Profile = Template.bind({})
Profile.args = {
    ...PostFormStories.PostForm.args,
    ...PostsStories.Posts.args,
    ...ProfileInfoStories.ProfileInfo.args
}