import React from 'react'
import Post from './Post';
import {Story} from '@storybook/react';
import {PostType} from '../../../../redux';
import {v1} from 'uuid';

export default {
    title: 'Profile/Post',
    component:Post
}

const Template:Story<PostType> = (args) => <Post {...args}/>

export const SimplePost = Template.bind({})
SimplePost.args = {
    id:v1(),
    likes: 3,
    message:'Hello world'
}