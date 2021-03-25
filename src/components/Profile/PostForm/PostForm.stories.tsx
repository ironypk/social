import React from 'react';
import {PostForm as PostFormComponent} from './PostForm';
import {Story} from '@storybook/react';

export default {
    title : 'Profile/PostForm',
    component : PostFormComponent
}

const Template:Story = (args) => <PostFormComponent {...args}/>
export const PostForm = Template.bind({})
PostForm.args={}