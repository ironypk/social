import React from 'react';
import Posts, {ProfilePropsType} from './Posts';
import {Story} from '@storybook/react';
import {v1} from 'uuid';

export default {
    title:'Profile/Posts',
    component:Posts
}

const Template:Story<ProfilePropsType> = (args) => <Posts {...args}/>
export const WithPost = Template.bind({})
WithPost.args = {
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