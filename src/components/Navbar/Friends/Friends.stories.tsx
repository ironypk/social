import React from 'react';
import Friends, {FriendsPropsType} from './Friends';
import {Story} from '@storybook/react';
import {v1} from 'uuid';

export default {
    title : 'Navbar/Friends',
    component:Friends
}

const Template:Story<FriendsPropsType> = (args) => <Friends {...args}/>

export const DefaultFriends = Template.bind({})
DefaultFriends.args={
    friends : [
        {
            id: v1(),
            name: 'Витя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
    ]
}
