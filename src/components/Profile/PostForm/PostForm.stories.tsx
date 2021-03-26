import React from 'react';
import {PostForm as PostFormComponent, PostFormPropsType} from './PostForm';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title : 'Profile/PostForm',
    component : PostFormComponent
}

const Template:Story<PostFormPropsType> = (args) => <PostFormComponent {...args} changeNewPostText={action('Изменить')} addPost={action('Добавил пост')}/>
export const PostForm = Template.bind({})
PostForm.args={
    newPostText : ''
}