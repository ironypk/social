import React from 'react';
import {Friends as FriendsComponent,FriendsPropsType} from './Friends';
import {Story} from '@storybook/react';
import {v1} from 'uuid';

export default {
    title : 'Navbar/Friends',
    component:FriendsComponent
}

const Template:Story<FriendsPropsType> = (args) => <FriendsComponent {...args}/>

export const Friends = Template.bind({})
Friends.args={
    friends : [
        {
            id: v1(),
            name: 'Витя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Маша',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Маша',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
    ]
}
