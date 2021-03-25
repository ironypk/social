import React from 'react'
import {Post as PostComponent} from './Post';
import {Story} from '@storybook/react';
import {PostType} from '../../../../redux';
import {v1} from 'uuid';

export default {
    title: 'Profile/Post',
    component:PostComponent
}

const Template:Story<PostType> = (args) => <PostComponent {...args}/>

export const Post = Template.bind({})
Post.args = {
    id:v1(),
    likes: 3,
    message:'Hello world'
}