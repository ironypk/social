import React from 'react';
import {Posts as PostsComponent, ProfilePropsType} from './Posts';
import {Story} from '@storybook/react';
import {v1} from 'uuid';

export default {
    title:'Profile/Posts',
    component:PostsComponent
}

const Template:Story<ProfilePropsType> = (args) => <PostsComponent {...args}/>
export const Posts = Template.bind({})
Posts.args = {
    posts:
        [{
        id: v1(),
        likes: 10,
        message: 'Коронавирус это плохо'
    },
        {
            id: v1(),
            likes: 3,
            message: 'Акуна матата'
        }],
}