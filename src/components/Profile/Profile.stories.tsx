import React from 'react';
import {Profile as ProfileComponent, ProfilePropsType} from './Profile';
import {Story} from '@storybook/react';
import * as PostsStories from './Posts/Posts.stories'
import * as ProfileInfoStories from './ProfileInfo/ProfileInfo.stories'
import * as PostFormStories from './PostForm/PostForm.stories'
import {action} from '@storybook/addon-actions';
import {ProfilePageType} from '../../redux';

export default {
    title:'Profile/Profile',
    component:ProfileComponent
}

const Template:Story<ProfilePageType & ProfilePropsType> = (args) => <ProfileComponent {...args} changeNewPostText={action('Изменить текст')} addPost={action('Добавил пост')}/>
export const Profile = Template.bind({})
Profile.args = {
    ...PostFormStories.PostForm.args,
    ...PostsStories.Posts.args,
    ...ProfileInfoStories.ProfileInfo.args
}